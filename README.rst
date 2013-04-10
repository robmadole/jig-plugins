Pyflakes
========

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=pyflakes

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Pyflakes - analyze Python files and check for various erros (uses `pyflakes`_
which was written by the Divmod developers)

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

    $ jig plugin add http://github.com/robmadole/jig-plugins@pyflakes

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
.. _pyflakes: http://pypi.python.org/pypi/pyflakes
