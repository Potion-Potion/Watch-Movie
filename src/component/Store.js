import create from 'zustand';

const testStore = create((set) => ({
    selectedImage: ()=> set((state)=>({})) 
})) 

export default testStore;