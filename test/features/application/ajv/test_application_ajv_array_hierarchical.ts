import TSON from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_hierarchical = _test_application_ajv(
    "hierarchical array",
    TSON.application<[ArrayHierarchical], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/ArrayHierarchical.ICompany",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ArrayHierarchical.ICompany": {
                    $id: "components#/schemas/ArrayHierarchical.ICompany",
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        serial: {
                            type: "number",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        established_at: {
                            $ref: "components#/schemas/ArrayHierarchical.ITimestamp",
                        },
                        departments: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ArrayHierarchical.IDepartment",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "serial",
                        "name",
                        "established_at",
                        "departments",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ArrayHierarchical.ITimestamp": {
                    $id: "components#/schemas/ArrayHierarchical.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            type: "number",
                            nullable: false,
                        },
                        zone: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["time", "zone"],
                    "x-tson_jsDocTags": [],
                },
                "ArrayHierarchical.IDepartment": {
                    $id: "components#/schemas/ArrayHierarchical.IDepartment",
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        sales: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "components#/schemas/ArrayHierarchical.ITimestamp",
                        },
                        employees: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ArrayHierarchical.IEmployee",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "code",
                        "sales",
                        "created_at",
                        "employees",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ArrayHierarchical.IEmployee": {
                    $id: "components#/schemas/ArrayHierarchical.IEmployee",
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        age: {
                            type: "number",
                            nullable: false,
                        },
                        grade: {
                            type: "number",
                            nullable: false,
                        },
                        employeed_at: {
                            $ref: "components#/schemas/ArrayHierarchical.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "age", "grade", "employeed_at"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
