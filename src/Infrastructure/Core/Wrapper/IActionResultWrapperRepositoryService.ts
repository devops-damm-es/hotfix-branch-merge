export abstract class IActionResultWrapperRepositoryService {
    abstract setActionResult(success: Boolean, message: String);
    abstract omitActionResult(message: String);
}