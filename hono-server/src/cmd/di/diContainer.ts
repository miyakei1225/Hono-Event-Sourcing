import type { OrderUseCase } from "../../usecase/orderUseCase";

// NOTE: 実装途中
class DIContainer {
    private dependencies = new Map<string, any>();

    register<T>(name: string, dependency: T) {
        this.dependencies.set(name, dependency);
    }

    resolve<T>(name: string): T {
        const dependency = this.dependencies.get(name);
        if (!dependency) {
            throw new Error(`Dependency ${name} not found`);
        }
        return dependency;
    }
}

const container = new DIContainer();
container.register<OrderUseCase>('OrderUseCase', new CreateOrderUseCase());

export default container;
