export class Product {
  constructor(initData?: Partial<Product>) {
    if (!initData) return;
    Object.assign(this, initData);
  }

  id!: String;

  name!: string;

  company!: string;

  authors!: string[];

  price!: number;

  isShow!: boolean;

  photoUrl!: string;

  createDate!: Date;
}
