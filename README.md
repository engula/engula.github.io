# The Engula Website

This repository hosts the source code of [Engula website](http://engula.com/).

## Requirements

Building the website requires [mkdocs](https://www.mkdocs.org/). To get it:

```bash
pip install mkdocs-material mkdocs-git-revision-date-plugin
```

## Preview

To preview the website, type:

```bash
mkdocs serve
```

By default, it will create a server listening on http://localhost:8000, you can open it with a brower to preview the website.

## Building

To build the website, type:

```bash
mkdocs build
```

The output will be in the `site` subdirectory. To check it out, open it in your web browser.
