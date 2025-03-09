import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
