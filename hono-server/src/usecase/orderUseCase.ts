import type{ CreateInput, CreateOutput } from "./create"

export interface OrderUseCase {
    create(input: CreateInput): Promise<CreateOutput>
}
