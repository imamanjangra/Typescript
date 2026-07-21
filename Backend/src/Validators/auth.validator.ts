import { z} from 'zod';

export const registerScheme = z.object({
    fullname : z 
    .string()
    .trim()
    .min(3 , "Fullname must be at least 3 char")
    .max(12 , "Fullname must be at most 12 char"),

    email : z
    .string()
    .trim(),

    password : z 
    .string()
    .min(8 , "minimum 8 character")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number")

}).strict();
export const paramsvalue = z.object({
    id : z
    .number()
    .positive()
})
export const loginScheme = z.object({
    email : z
    .string()
    .trim(),

    pasword : z
    .string()
    .min(1 , "must be required")
}).strict();


//-----------Extend -> add more feald dose not need to repete code 

const userScheme = z.object({
    name : z
        .string()
        .min(3)
        .max(20),
    
    email : z
    .string()
    .email()
            
})

const adminScheme = userScheme.extend({
    role : z.literal("admin")
})


// ---------------merge  -> merge two object 
const user = z.object({
    name : z.string(),
    password : z.string().min(7).max(20)
})

const address = z.object({
    address : z.string()
})

const profile = user.merge(address)

//------------infer object --> create type inerface 

export type RegisterBody = z.infer<typeof registerScheme>;

export type ParamsBody = z.infer<typeof paramsvalue>


// --------- pick -> only select the feld which is show to users 

const publicUser = user.pick({
    name : true
})

// -------------omit -> reverse of pick - only true value os not show 

const safeUser = user.omit({
    password: true
});

// -------partial -> create all field optional use for updating 


const updateSchema = user.partial();


// --required -> opposite to partial all are required 

const requiredSchema = user.required();

// array 

const scheme = z.object({
    skills : z.array(z.string())
})

// nonempty 

const schema1 = z.object({
    skills: z.array(z.string()).nonempty()
});

// enum 

const schema2 = z.object({
    role: z.enum([
        "admin",
        "user",
        "seller"
    ])
});

// union 

const schema3 = z.object({
    id: z.union([
        z.string(),
        z.number()
    ])
});

// .refine()

const u1 = z.object({
    name : z
    .string()
    .max(4)
    .min(2),

    password: z
    .string()
    .refine(
        value => value.includes("@"),
        {
            message: "Password must contain @"
        }
    )
})

// .superRefine()

const schema4 = z.object({
    password: z.string(),
    confirmPassword: z.string()
}).superRefine((data, ctx) => {

    if (data.password !== data.confirmPassword) {

        ctx.addIssue({
            code: "custom",
            message: "Passwords don't match",
            path: ["confirmPassword"]
        });

    }

});



/*
1)--> Primitive Types (Foundation)
        z.string()
        z.number()
        z.boolean()
        z.bigint()
        z.date()
        z.symbol()
        z.undefined()
        z.null()
        z.void()
        z.any()
        z.unknown()
        z.never()

2)--> String Methods
        .min()
        .max()
        .length()
        .email()
        .url()
        .uuid()
        .cuid()
        .startsWith()
        .endsWith()
        .includes()
        .regex()
        .trim()
        .toLowerCase()
        .toUpperCase()
        .datetime()
        .date()
        .time()
        .ip()

3)--> Number Methods
        .min()
        .max()
        .gt()
        .gte()
        .lt()
        .lte()
        .int()
        .positive()
        .negative()
        .nonnegative()
        .nonpositive()
        .multipleOf()
        .finite()
        .safe()

4)--> Objects
        .object() --> create object 

        .strict()  --> if unknow fields is come then it remove and give error extra fields is come 

        .passthrough()  -> if extra fields is come then not give any error 

        .strip()  -> this remove unknown fields without any error or silently 

        .catchall()  -> instend of rejecting unknown fields it add a default type 

        .extend() -> i give ex -> add more field 

        .merge()  -> ex -> merge tow object 

        .pick()  -> ex -> select some filed to show some one 

        .omit()  -> ex -> reverse of pick 

        .partial()  -> ex -> every field optional 

        .required()  -> ex -> all field are required 


5)-->Arrays & Collections
        .array()

        .nonempty()

        .min()

        .max()

        .length()

        .set()

        .map()

        .record()

6) Advanced Validation
        .optional()

        .nullable()  -> alow null values z.string().nullable()

        .nullish() -> allow null , undefined , missing property 

        .default() -> ex  role: z.string().default("user") -> defalut value 

        .literal()  -> Accepts exactly one value ->  role: z.literal("admin")

        .enum()  -> 

        .union() -> Allows multiple types.

*/