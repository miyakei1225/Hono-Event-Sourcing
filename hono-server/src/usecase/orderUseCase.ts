import { CreateInput, CreateOutput } from "./create"

type OrderUseCase = {
    create(input: CreateInput): Promise<CreateOutput>
}
