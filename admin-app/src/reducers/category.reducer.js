/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { categoryConstants } from "../actions/constants";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (id, categories, category) => {
  let myCategories = [];

  for (let cat of categories) {
    if (cat.parentId && cat.parentId == id) {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(
                id,
                [
                  ...cat.children,
                  {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children,
                  },
                ],
                category
              )
            : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(id, cat.children, category)
            : [],
      });
    }
  }

  return myCategories;
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };

      break;
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: false,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:

      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );

      console.log(updatedCategories);

      state = {
        ...state,
        categories: updatedCategories,
        loading: true,
      };

      break;
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...initState,
      };
      break;
  }

  return state;
};
