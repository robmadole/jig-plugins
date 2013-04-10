Woops
=====

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=woops

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Check for silly errors like:

* leaving a ``console.log(foo)`` in your JavaScript
* leaving a ``debugger`` in your JavaScript
* merge markers from a conflicted file (when you git merge for example)
* Python print statements and ``pdb.set_trace()`` calls
* Accidental Vim commands like ``:wq``

Quick install
-------------

You need Jig to use these plugins. Install it with this:

::

    $ pip install jig || easy_install jig

And then you can setup your Git repository to use Jig with this:

::

    $ cd myrepo
    $ jig init .

Install the plugins:

::

    $ jig plugin add http://github.com/robmadole/jig-plugins@woops

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
