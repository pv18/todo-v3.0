export type FilterType = 'all' | 'active' | 'completed'

export interface TaskType {
    id: string
    title: string
    completed: boolean
}

export interface TodoType {
    id: string
    title: string
    filter: FilterType
}