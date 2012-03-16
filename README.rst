Jig Plugins
===========

This repo contains a collection of plugins written for the `Jig tool`_.

What do these plugins do?
-------------------------

* PEP8 checker - check your code for adherence to the `PEP8`_ standard (this
  `uses a tool`_ created by Johann Rochol)
* Pyflakes - analyze Python files and check for various erros (uses `pyflakes`_
  which was written by the Divmod developers)
* Whitespace - look for lines with nothing but whitespace plus mixed tabs and
  spaces
* Woops - check for silly errors (like leaving a ``console.log(foo)`` in your
  JavaScript)

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

    $ jig plugin add http://github.com/robmadole/jig-plugins

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
.. _PEP8: http://www.python.org/dev/peps/pep-0008/
.. _uses a tool: http://pypi.python.org/pypi/pep8
.. _pyflakes: http://pypi.python.org/pypi/pyflakes
