Whoops
======

This plugin is intended to catch some of the sillier things we as developers
when we are either in a hurry or haven't reviewed our code carefully enough.

The name "Whoops" comes from the common response when someone tells you that
you accidentally committed a file that contains the following:

The plugin is heavily inspired by George Bandl's work with
https://bitbucket.org/birkenfeld/hgcodesmell.

* debugger;
* console.log
* Python debugger pdb.set_trace()
* print
* Windows newline on non-Windows platforms
* Looks for Vim stuff (:wq in your text)
* Merge markers (>>>>>>> and <<<<<<<)

First let's see how it catches Vim stuff. This typically happens when a Vim
user is in insert mode and they attempt to save and quit. The command for this
in Vi/Vim is ``:wq``.

.. expectation::
    :from: 01
    :to: 02

    ▾  whoops

    ⚠  line 1: README
        vim command

    Ran 1 plugin
        Info 0 Warn 1 Stop 0

A common thing when debugging Javascript or Python is to leave a ``debugger;``
or ``pdb.set_trace()``.

.. expectation::
    :from: 02
    :to: 03

    ▾  whoops

    ⚠  line 6: a.py
        pdb.set_trace()

    ⚠  line 3: b.js
        javascript debugger

    Ran 1 plugin
        Info 0 Warn 2 Stop 0

This one is a little contraversial. It detects ``print`` or ``sprint``
statements. There are plenty of valid use cases where ``print`` is perfectly
valid but it's also a tool used by Python programmers when they are debugging.

This will catch either the statement (Python 2.x) or the function (Python 3.x).

.. expectation::
    :from: 03
    :to: 04

    ▾  whoops

    ⚠  line 8: a.py
        print statement

    ⚠  line 9: a.py
        print statement

    Ran 1 plugin
        Info 0 Warn 2 Stop 0

We can do a similar thing for Javascript. When developers use ``console.log``
it is generally for debugging as well.

.. expectation::
    :from: 04
    :to: 05

    ▾  whoops

    ⚠  line 5: b.js
        javascript console usage

    Ran 1 plugin
        Info 0 Warn 1 Stop 0

It can detect Windows newlines.

.. expectation::
    :from: 05
    :to: 06

    ▾  whoops

    ⚠  README
        Contains Windows newlines

    Ran 1 plugin
        Info 0 Warn 1 Stop 0

But it can be turned off easily by editing the settings.

.. plugin-settings::

    check_windows_newlines = no

.. expectation::
    :from: 05
    :to: 06

    Ran 1 plugin, nothing to report

Lastly, it will find merge markers. These occur when you have a conflicted file

.. expectation::
    :from: 06
    :to: 07

    ▾  whoops

    ⚠  line 3: README
        merge marker

    ⚠  line 7: README
        merge marker

    Ran 1 plugin
        Info 0 Warn 2 Stop 0
