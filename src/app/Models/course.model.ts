import { Grade } from './grade.model';

export class Course {
    id?: number;
    created_at?: string;
    updated_at?: string;
    name: string;
    grade_id: number;
    grade?: Grade;
}
