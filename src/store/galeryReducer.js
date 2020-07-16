const ADD_POST = 'gallery/ADD-POST'
const DELETE_POST = 'gallery/DELETE_POST'
const EDIT_COMMENT = 'gallery/EDIT_COMMENT'
const SHOW_IMAGE = 'gallery/SHOW_IMAGE'

let initialState = {
  image: [
    {
      id: 0,
      comment: 'Hello, this my first post',
      src: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
  ],
  idNumber: 1,
  showImage: undefined,
}


const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        idNumber: Number(state.idNumber + 1),
        image: [...state.image, {id: state.idNumber, comment: action.comment, src: action.src}],
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        image: state.image.filter(i => i.id !== action.id),
      }
    }
    case EDIT_COMMENT: {
      return {
        ...state,
        image: state.image.map(i => {
          if (action.id === i.id) {
            return {...i, comment: action.comment}
          }
          return i
        }),
      }
    }
    case SHOW_IMAGE: {

      return {
        ...state,
        showImage: state.image.filter(p=> p.id===action.id),
      }
    }
    default:
      return state
  }
}
export const addPost = (src, comment) => ({type: ADD_POST, src, comment})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const editComment = (id, comment) => ({type: EDIT_COMMENT, id, comment})
export const showImage = (id) => ({type: SHOW_IMAGE, id})


export default galleryReducer
