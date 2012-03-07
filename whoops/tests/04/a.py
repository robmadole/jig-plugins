# The following print will not be flagged, it's not really using the print()
# statement/function.
def print_digits():
    # Here is s tricky bit I was debugging
    a = range(100)

    # What is a?
    print a
    print(a)
