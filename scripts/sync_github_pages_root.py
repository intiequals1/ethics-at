#!/usr/bin/env python3
"""Synchronize the static public/ output to the GitHub Pages branch-root source.

GitHub Pages is currently configured to publish main/. This script mirrors only
files below public/ into the repository root and remembers its managed paths.
It does not alter project metadata such as README.md, CNAME, .github/ or public/.
"""

from __future__ import annotations

import json
import shutil
from pathlib import Path

REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIRECTORY = REPOSITORY_ROOT / "public"
MANIFEST_PATH = Path(__file__).with_name("github_pages_root_manifest.json")


def load_previous_paths() -> set[Path]:
    if not MANIFEST_PATH.exists():
        return set()
    stored = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    if not isinstance(stored, list) or not all(isinstance(item, str) for item in stored):
        raise ValueError(f"Invalid managed-path manifest: {MANIFEST_PATH}")
    return {Path(item) for item in stored}


def remove_empty_parent_directories(path: Path) -> None:
    parent = path.parent
    while parent != REPOSITORY_ROOT and parent.exists():
        try:
            parent.rmdir()
        except OSError:
            return
        parent = parent.parent


def main() -> None:
    if not SOURCE_DIRECTORY.is_dir():
        raise FileNotFoundError(f"Static source directory not found: {SOURCE_DIRECTORY}")

    current_paths = {
        item.relative_to(SOURCE_DIRECTORY)
        for item in SOURCE_DIRECTORY.rglob("*")
        if item.is_file()
    }
    previous_paths = load_previous_paths()

    for relative_path in sorted(previous_paths - current_paths, key=lambda item: len(item.parts), reverse=True):
        target = REPOSITORY_ROOT / relative_path
        if target.is_file() or target.is_symlink():
            target.unlink()
            remove_empty_parent_directories(target)

    for relative_path in sorted(current_paths):
        source = SOURCE_DIRECTORY / relative_path
        target = REPOSITORY_ROOT / relative_path
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)

    MANIFEST_PATH.write_text(
        json.dumps(sorted(path.as_posix() for path in current_paths), indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Synchronized {len(current_paths)} file(s) from public/ to the GitHub Pages root.")


if __name__ == "__main__":
    main()
