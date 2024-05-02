import React, { useRef } from "react";
import './Categories.css'
import {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} from "../../context/categoryApi";

const Categories = () => {
  let { data, isLoading, isError } = useGetCategoryQuery();
  let [
    createCategory,
    {
      isLoading: loadingCreateCategory,
      data: dataCreateCategory,
      isError: isErrorCreateCategory,
      error
    },
  ] = useCreateCategoryMutation();

  // console.log("dataCreateCategory>>>>", dataCreateCategory);
  // console.log("isErrorCreateCategory>>>>", isErrorCreateCategory);
  // console.log("error>>>>", error);

  let [deleteCategory, { }] = useDeleteCategoryMutation()




  const title = useRef();

  const handleCreateCategory = (e) => {
    e.preventDefault();
    let category = {
      title: title.current.value,
    };
    createCategory(category);
    title.current.value = ""
  };

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
  }



  let categories = data?.data?.map((el, inx) => (
    <div className="textor" key={el.id}>
      <span className="create__span">{inx + 1}. {el.title}</span>
      <button className="form__buuutn" onClick={() => handleDeleteCategory(el.id)}>delete</button>
    </div>
  ));
  return (
    <div>
      <h2 className="CREATE__h2">CREATE-CATEGORIES</h2>
      <form className="createcategory__form" onSubmit={handleCreateCategory} action="">
        <input className="form__input" ref={title} type="text" placeholder="create-category" />
        <button className="form__button" disabled={loadingCreateCategory}>Create</button>
      </form>
      {isLoading ?
        <div className="loading">
          <div class="loader">
            <div class="load-inner load-one"></div>
            <div class="load-inner load-two"></div>
            <div class="load-inner load-three"></div>
            <span class="text">Loading...</span>
          </div>
        </div> : <></>}

      <div className="bgraundimgg">{categories}</div>
    </div>
  );
};

export default Categories;
