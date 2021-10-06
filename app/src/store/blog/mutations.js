
export function setBlogs (state, data) {
    state.blogs=new Map(Object.entries(data)) 
 }