export class ApiError {
  constructor(
    readonly code: string,
    readonly details?: any
  ) {}
}
