import React, { useState } from 'react'
import './productCreat.css'
import { useCreateProductMutation } from '../../context/productApi'
import { useGetCategoryQuery } from '../../context/categoryApi'

let unitsData = ["kg", "litr", "dona", "metr"]

const ProductCreate = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [units, setUnits] = useState("")
  const [description, setDescription] = useState("")
  const [files, setFiles] = useState([])

  const { data: categories } = useGetCategoryQuery()
  const [createProduct, { isLoading, data, error }] = useCreateProductMutation()
  let catigoriesItems = categories?.data?.map(el => (
    <option key={el.id} value={el.title}>{el.title}</option>
  ))
  let untilsItem = unitsData?.map(el => (
    <option key={el} value={el}>{el}</option>
  ))

  const handleCreateProduct = e => {
    e.preventDefault()
    let productForm = new FormData()
    productForm.append("title", title)
    productForm.append("price", price)
    productForm.append("category", category)
    productForm.append("units", units)
    productForm.append("oldPrice", 150)
    productForm.append("description", description)
    productForm.append("info", {})
    Array.from(files).forEach(el => {
      productForm.append("files", el, el.name)
    })
    createProduct(productForm)
  }
  return (
    <>
      <div className="productcreate__bg">
        <h2>ProductCreate</h2>
        <form onSubmit={handleCreateProduct} className='form__wrapper' action="">
          <div className="div">
            <input value={title} onChange={e => setTitle(e.target.value)} className='wrapper__input' type="text" />
            <input value={price} onChange={e => setPrice(e.target.value)} className='wrapper__input' type="number" />
            <select value={category} onChange={e => setCategory(e.target.value)} className='wrapper__input' name="" id="">
              {catigoriesItems}
            </select>
            <select value={units} onChange={e => setUnits(e.target.value)} className='wrapper__input' name="" id="">
              <option value="">tallang</option>
              {untilsItem}
            </select>
          </div>
          <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
          <input className="form__files" onChange={(e) => setFiles(e.target.files)} type="file" multiple accept='.png, .jpg, .jpeg, .heic' />
          <button className="form__buuutn" >Create</button>
          <div>
            {
              Array.from(files)?.map(el => URL.createObjectURL(el))?.map(el => (
                <img className='create__img' key={el} src={el} alt="" />
              ))
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductCreate