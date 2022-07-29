import create from "zustand";

const useEnvironmentsStore = create((set) => ({
  environmentsList: [],
  environmentsData: {},
  edit: false,
  setEdit: (_edit) => set(() => ({ edit: _edit })),
  setEnvironmentsData: (name, data) =>
    set((state) => {
      const id = state.environmentsList.length + 1;
      state.environmentsList.push({
        name,
        id,
      });
      state.environmentsData[id] = Object.assign(data, { id });
    }),
  updateEnvironment: (id, data) =>
    set((state) => {
      state.environmentsData[data.name] = {
        ...state.environmentsData[data.name],
        ...data,
      };
      const index = state.environmentsList.findIndex((item) => item.id === id);
      if (state.environmentsList[index].name !== data.name) {
        state.environmentsList = [
          ...state.environmentsList.slice(0, index),
          { id, name: data.name },
          ...state.environmentsList.slice(index + 1),
        ];
      }
    }),
  deleteItem: (_id) =>
    set((state) => {
      delete state.environmentsData[_id];
      state.environmentsList = state.environmentsList.filter(
        (item) => item.id !== _id
      );
    }),
}));

export default useEnvironmentsStore;
