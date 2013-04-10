PEP8 checker
============

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=pep8-checker

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Check your code for adherence to the `PEP8`_ standard (this `uses a tool`_
created by Johann Rochol)

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

    $ jig plugin add http://github.com/robmadole/jig-plugins@pep8-checker

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
.. _PEP8: http://www.python.org/dev/peps/pep-0008/
.. _uses a tool: http://pypi.python.org/pypi/pep8
