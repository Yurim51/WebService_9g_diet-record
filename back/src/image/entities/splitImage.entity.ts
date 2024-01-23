import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class SplitImage {
  @PrimaryGeneratedColumn()
  splitImageId: number;

  @Column()
  imageId: string;

  @Column()
  xCoordinate: number;

  @Column()
  yCoordinate: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column({type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Timestamp;
}