const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.6686047",
        lng: "-46.6175241",
        name: "Lar das meninas",
        about: "O Lar das meninas faz acolhimento à crianças e adolescentes (0 a 17 anos e 11 meses).",
        whatsapp: "1198988989",
        images: [
            "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha e traga muito amor para dar.",
        opening_hours: "Horários de visitas Das 8hs até 18hs",
        opening_on_weekends: "0"
    })

     //consultar dados da tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)  
     
     //consultar orphanages pelo Id
     const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2"')
     console.log(orphanage)

     // deletar dados da tabela
    /*
     console.log(await db.run(`DELETE FROM orphanages WHERE id = "4"`))
     console.log(await db.run(`DELETE FROM orphanages WHERE id = "6"`)) */


})
