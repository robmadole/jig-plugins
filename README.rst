Whitespace
==========

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=whitespace

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Look for lines with nothing but whitespace plus mixed tabs and spaces.

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

    $ jig plugin add http://github.com/robmadole/jig-plugins@whitespace

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
