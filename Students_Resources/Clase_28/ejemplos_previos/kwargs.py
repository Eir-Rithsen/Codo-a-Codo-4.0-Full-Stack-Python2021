def concatenar(**kwargs):
    result = ""
    print(kwargs['a'])
    # Iteramos sobre los valores del diccionario
    for arg in kwargs.values():
        result += arg
    return result

print(concatenar(a="Codo!"))
print(concatenar(a="Codo ", b="A ", c="Codo", e="!"))


