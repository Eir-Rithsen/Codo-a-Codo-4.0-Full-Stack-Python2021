class Perro:
    # Atributo de Clase
    genero= "Canis"
    
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # Método de instancia
    def imprimir(self): 
        self.ladrar("bark")
        return f'{self.nombre} tiene {self.edad} años.'

    @classmethod
    def metodo_de_clase(cls):
        print("Mi genero es " + cls.genero)

    # Otro método de instancia
    def ladrar(self, sonido):
        return f'{self.nombre} dice {sonido}.'

    # Se puede reemplazar el método imprimir() con __str__()
    def __str__(self):
        return f'{self.nombre} tiene {self.edad} años.'

miMascota = Perro("Paka", 11)
otraMascota = Perro("Rocky", 11)
otraMasMascota = Perro("Toby", 11)

print(miMascota)

print(miMascota.genero)
print(otraMascota.genero)
print(otraMasMascota.genero)

Perro.genero = "Animalis"
Perro.metodo_de_clase()

print(miMascota.genero)
print(otraMascota.genero)
print(otraMasMascota.genero)

miMascota.genero = "Flashee"

print(miMascota.genero)
print(otraMascota.genero)
print(otraMasMascota.genero)






print(miMascota.nombre)
miMascota.imprimir()
miMascota.ladrar("Guau guau!")

print("Género:", miMascota.genero)
print(miMascota.imprimir())
print(miMascota.ladrar("Guau, guau!"))
print(miMascota)


