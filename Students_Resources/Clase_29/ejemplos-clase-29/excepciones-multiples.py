# Excepciones múltiples
try:
    n = float(input("Ingrese un número divisor: "))
    5/n
    raise IndexError("Cualquiera")
except TypeError:
    print("No se puede dividir el número entre una cadena")
except ValueError:
    print("Debes introducir una cadena que sea un número")
except ZeroDivisionError as ze:
    print("No se puede dividir por cero, prueba otro número")
except Exception as e:
    print("Ha ocurrido un error no previsto", type(e).__name__)