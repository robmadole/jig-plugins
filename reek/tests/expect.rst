Ruby Reek
=========

Stinky Ruby code will be found and reported on.

.. expectation::
    :from: 01
    :to: 02

    ▾  reek

    ⚠  line 2: smelly.rb
        Useless::NotCommented has no descriptive comment (IrresponsibleModule)

But we can disable it by using a config file

.. expectation::
    :from: 02
    :to: 03

Lots of smelly files can be reported on.

.. expectation::
    :from: 03
    :to: 04

    ▾  reek

    ⚠  line 1: s3.rb
        check_for_nil refers to object more than self (LowCohesion, FeatureEnvy)

    ⚠  line 2: s3.rb
        check_for_nil performs a nil-check. (SimulatedPolymorphism, NilCheck)

    ⚠  line 1: s2.rb
        call_it has unused parameter 'bar' (UnusedCode, UnusedParameters)

    ⚠  line 1: s1.rb
        Bomb has prima donna method `bang!` (PrimaDonnaMethod)

But even if it's smelly, if it's not a Ruby file it's skipped.

#.. expectation::
#    :from: 04
#    :to: 05
