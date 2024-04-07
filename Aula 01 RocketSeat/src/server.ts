import { z } from 'zod'

const userSchema = z.object ({
    name: z.string()
        .min(3, {message: "O nome precisa de 3 caracteres."})
        .transform(name => name.toUpperCase()),
    cidade: z.string().min(5, {message: 'Essa cidade não existe'}),
    age: z.number().min(18, {message: 'Você precisa ser maior de idade'}),
    senha: z.string()
    .min(5, {message: 'Sua senha deve ter mais de 5 caratecteres'})
    .max(20, {message: 'Sua senha deve ter menos de 20 caratecteres'})
})

type User = z.infer<typeof userSchema> //com zod -> ao invés de fazer a tipagem manual, pode se fazer automatizada 

/* interface User { //sem zod
    name: string
    age: number
}
 */
function saveUserToDatebase(user: User) {
    //salvar no banco de dados
   /*  console.log(user) */ // -> sem zod
   const {name, cidade, age, senha} = userSchema.parse(user)

   console.log(name, cidade, age, senha)

}

saveUserToDatebase({
    name: 'Diegos',
    cidade: 'Santos',
    age: 28,
    senha: '4123213'
})