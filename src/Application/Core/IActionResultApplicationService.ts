export abstract class IActionResultApplicationService {
    abstract setActionResult(success: Boolean, message: String);
    abstract omitActionResult(message: String);
}