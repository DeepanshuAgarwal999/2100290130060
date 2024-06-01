import React, { useEffect, useState } from 'react'
import Card from './Card'

const companies: string[] = [
    "AMZ",
    "FLP",
    "SNP",
    "MYN",
    "AZO"
]
const categories: string[] = [
    "Phone",
    "Computer",
    "Tv",
    "Earphone",
    "charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "Pc"
]
export type ProductsType = {
    productName: string,
    price: number,
    rating: number,
    discount: number,
    availability: string
}
const GetProducts = () => {
    const [company, setCompany] = useState('AMZ')
    const [categoryName, setCategoryName] = useState("Laptop")
    const [minPrice, setMinPrice] = useState(1)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [nProducts, setNProducts] = useState(10)
    const [products, setProducts] = useState<ProductsType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const getData = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${categoryName}/products?top=${nProducts}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
                const data = await getData.json()
                console.log(data);
                if (data) {
                    setProducts(data)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        getProducts()
    }, [company, categoryName, minPrice, maxPrice, nProducts])


    return (
        <section className='space-y-10 '>
            <h1 className='text-center text-2xl mt-10 font-bold sm:text-4xl'>N Products Problem</h1>

            <h2 className=' text-xl mt-10 font-semibold sm:text-3xl p-4 text-center'>Filter by Company name</h2>

            <div className='flex items-center gap-2 justify-center flex-wrap'>
                {companies.map((company) => {
                    return (
                        <button onClick={() => setCompany(company)}>{company}</button>
                    )
                })}
            </div>
            <h2 className=' text-xl mt-10 font-semibold sm:text-3xl  text-center'>Filter by Categories</h2>
            <div className='flex items-center gap-2 flex-wrap max-w-5xl mx-auto justify-center p-4'>
                {categories.map((category) => {
                    return (
                        <button onClick={() => setCategoryName(category)}>{category}</button>
                    )
                })}
            </div>

            <div className='flex flex-col items-center justify-center gap-4  '>
                <label htmlFor="">Min price</label>
                <input type="text" name="minPrice" className='p-2 border rounded-xl border-white' onChange={(e: any) => setMinPrice(e.target.value)} />
                <label htmlFor="">Max price</label>

                <input type="text" name="" className='p-2 border rounded-xl border-white' onChange={(e: any) => setMaxPrice(e.target.value)} />

                <label htmlFor="">Number of products</label>
                <input type="text" name="" className='p-2 border rounded-xl border-white' onChange={(e: any) => setNProducts(e.target.value)} />
            </div>

            <main className='flex flex-wrap justify-between gap-4'>
                {
                    (products && products.length !== 0) ? <div>
                        {
                            products.map((product, i) => (
                                <Card product={product} key={i} />
                            ))
                        }
                    </div> : <h1 className='text-center self-center text-3xl font-semibold'>
                        Nothing to Show or No products Found
                    </h1>
                }
            </main>
           <div className='flex items-center justify-center'>
                <Card product={
                    {
                        productName: "Iphone",
                        price: 10000,
                        rating: 10,
                        discount: 5000,
                        availability: "yes"
                    }
                } />
           </div>

        </section>

    )
}

export default GetProducts