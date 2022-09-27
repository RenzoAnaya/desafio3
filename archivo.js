const { json } = require("express/lib/response")
const fs = require("fs")

class Contenedor {
    constructor(file){
        this.file = file 
    }
    
    async save(){
        try {
        let informacion = await fs.promises.readFile(this.file,'utf-8')
        let informacionObjeto = JSON.parse(informacion)
        let nuevoIndex = informacionObjeto.length - 1
        let ultimoObjeto = informacionObjeto[nuevoIndex]
        // let index = informacionObjeto.find(idUsable => idUsable.id === nuevoId)
        //     console.log(index)
        let nuevoProducto = { id: ultimoObjeto.id +1, nombre: "Tijera", precio: 356.45 }
        informacionObjeto.push(nuevoProducto)
        let textear = JSON.stringify(informacionObjeto)
        let subirTodo = await fs.promises.writeFile(this.file, textear)
        console.log(subirTodo)
        } catch (error) {
            console.log('error', error)
        }
    }
  
    async getById (a){
        try {
            let informacion = await fs.promises.readFile(this.file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            let dataId = informacionObjeto.find(idUsable => idUsable.id === a);
            console.log(dataId)
            console.log(informacionObjeto)
            
        } catch (error) {
            console.log('error',error)
            
        }
        
    }

    async getAll(){
        try {
            let informacion = await fs.promises.readFile(this.file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            console.log (informacionObjeto)
            return (JSON.stringify(informacionObjeto))
        } catch (error) {
            console.log('error getAll',error)
            
        }
    }

    async getByRandomId (){
        try {
            let randomId = (Math.floor((Math.random() * (this.file.length - 1 )) + 1))
            let informacion = await fs.promises.readFile(this.file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            let dataId = informacionObjeto.find(idUsable => idUsable.id === randomId);
            console.log(dataId)
            return (JSON.stringify(dataId))
            
        } catch (error) {
            console.log('error',error)
            
        }
        
    }
    

    async deleteById(a){
        try {
            let informacion = await fs.promises.readFile(this.file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            // let index = informacionObjeto.findIndex((idUsable) => {
            //     idUsable.id === a
            // })
            //informacionObjeto.find(idUsable => idUsable.id = a);
            let index = informacionObjeto.find(idUsable => idUsable.id === a)
            console.log(index)
            
            informacionObjeto.splice(index.id-1,1)
            //console.log(informacionObjeto)
            let textoLimpio = JSON.stringify(informacionObjeto)
            let subirTodo = await fs.promises.writeFile(this.file, textoLimpio)
            
        } catch (error) {
            
        }
        
    }

    async deleteAll(){
        try {
            let borrar = fs.promises.writeFile(this.file,'[]')
        } catch (error) {
            console.log('error deleteAll',error)
        }
    }

   


}

module.exports = Contenedor;

//testeo.getAll()
//testeo.deleteAll()
//testeo.deleteById(2)
//testeo.save()
//testeo.getById(4)


