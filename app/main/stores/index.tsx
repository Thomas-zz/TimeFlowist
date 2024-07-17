import { create } from 'zustand';

type Item = {
  id: string;
  name: string;
  startTime: Date | null;
  endTime: Date | null;
  // crtTime: Date | null;
  // updTime: Date | null;
}

type Project = {
  id: string;
  name: string;
  items: Item[];
  // crtTime: Date | null;
  // updTime: Date | null;
}

type Store = {
  projects: Project[];
}

type Action = {
  addProject: (project: Project) => void;
}

const useProjectStore = create<Store & Action>((set) => ({
  projects: [],
  addProject: (project: Project) => set((state) => ({ projects: [...state.projects, project] })),
}));

export default useProjectStore;
