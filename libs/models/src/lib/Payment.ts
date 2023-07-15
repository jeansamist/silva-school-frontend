export class Payment {
  constructor(public id?: number, public name?: string, public payment_type?: "full" | "installment", public installments?: number | string) {}
}
