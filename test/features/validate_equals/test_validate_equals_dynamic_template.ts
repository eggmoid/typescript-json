import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_dynamic_template = _test_validate_equals(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.validateEquals(input),
);
