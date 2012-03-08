Whitespace
==========

This plugin checks the entire contents of any staged file for common whitespace
issues. Namely:

* A line with nothing but whitespace
* A line that ends with whitespace
* A mixture of tab and spaces

A line with nothing but whitespace usually occurs when an editor has some kind
of smart indent.

.. expectation::
    :from: 01
    :to: 02

    ▾  whitespace

    ⚠  line 9: README
        is nothing but whitespace

    Ran 1 plugin
        Info 0 Warn 1 Stop 0

Whitespace at the end of a paragraph can sometimes be caused by bad paragraph
breaks.

.. expectation::
    :from: 02
    :to: 03

    ▾  whitespace

    ⚠  line 10: README
        ends with whitespace

    Ran 1 plugin
        Info 0 Warn 1 Stop 0

Mixing tabs and spaces makes everyone unhappy. That can be caught too.

.. expectation::
    :from: 03
    :to: 04

    ▾  whitespace

    ⚠  README
        has a mix of tabs and spaces

    Ran 1 plugin
        Info 0 Warn 1 Stop 0
