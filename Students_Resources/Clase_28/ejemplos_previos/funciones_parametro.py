def saludar_espanol():  
    print("Hola")

def saludar_ingles():  
    print("Hello")

saludadores = {
    'es': saludar_espanol,  
    'en': saludar_ingles
}

saludadores['es']()
saludadores['en']()


