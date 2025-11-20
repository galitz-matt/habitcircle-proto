export abstract class Entity<TProps> {
    protected constructor(protected readonly props: TProps) {}

    protected abstract create(props: TProps): this;

    clone(changes: Partial<TProps>): this {
        return this.create({ ...this.props, ...changes });
    }
}