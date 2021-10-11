
const tokenMap: Readonly<Record<string, Array<string>>>
    = Object.freeze({
        boolean: [
            "constant.language.boolean",
        ],
        class: [
            "entity.name.type.class",
            "meta.class entity.other.inherited-class",
        ],
        "class.declaration": [
            "meta.class entity.name.type.class",
        ],
        comment: [
            "comment",
        ],
        enum: [
            "entity.name.type.enum",
        ],
        "enum.declaration": [
            "meta.enum.declaration entity.name.type.enum",
        ],
        enumMember: [
            "variable.other.enummember",
        ],
        "enumMember.declaration": [
            "meta.enum.declaration variable.other.enummember",
        ],
        event: [],
        function: [
            "entity.name.function",
        ],
        "function.declaration": [
            "meta.definition.function entity.name.function",
        ],
        interface: [
            "entity.name.type.interface",
            "meta.interface entity.other.inherited-class",
        ],
        "interface.declaration": [
            "meta.interface entity.name.type.interface",
        ],
        keyword: [
            "keyword.other",
        ],
        "keyword.expression": [
            "variable.language",
            "keyword.other.new",
            "keyword.operator.expression",
        ],
        "keyword.storage": [
            "keyword.storage",
        ],
        "keyword.control": [
            "keyword.control",
        ],
        label: [
            "entity.name.label",
        ],
        macro: [],
        method: [],
        "method.declaration": [
            "meta.method.declaration meta.definition.method entity.name.function",
        ],
        namespace: [
            "entity.name.type.module",
        ],
        "namespace.declaration": [
            "meta.namespace.declaration entity.name.type.module",
        ],
        null: [
            "constant.language.null",
        ],
        number: [
            "constant.numeric",
        ],
        operator: [
            "keyword.operator",
            "punctuation.separator",
            "punctuation.definition.group",
        ],
        "operator.assignment": [
            "keyword.operator.assignment",
        ],
        "operator.bitwise": [
            "keyword.operator.bitwise",
        ],
        "operator.logical": [
            "keyword.operator.logical",
        ],
        "operator.arithmetic": [
            "keyword.operator.arithmetic",
        ],
        "operator.comparison": [
            "keyword.operator.comparison",
        ],
        parameter: [
            "variable.parameter",
        ],
        "parameter.declaration": [
            "meta.parameters variable.parameter",
        ],
        property: [
            "variable.other.property",
            "variable.object.property",
            "support.variable.property",
        ],
        "property.declaration": [
            "meta.object-literal.key",
            "meta.object-literal.key string.quoted.double",
            "meta.definition.property variable.object.property",
        ],
        regexp: [
            "string.regexp",
        ],
        "regexp.characterClass": [
            "punctuation.definition.character-class.regexp",
            "constant.other.character-class.range.regexp",
        ],
        string: [
            "string",
        ],
        "string.escape": [
            "constant.character.escape",
        ],
        "string.delimiter": [
            "punctuation.definition.string",
            "punctuation.definition.template-expression",
        ],
        struct: [],
        tomlArrayKey: [],
        tomlTableKey: [],
        type: [
            "entity.name.type",
            "support.type",
        ],
        "type.declaration": [
            "meta.type.declaration entity.name.type",
        ],
        "type.primitive": [
            "support.type.primitive",
        ],
        typeParameter: [],
        "typeParameter.declaration": [],
        variable: [
            "variable.other",
            "support.constant",
            "support.variable",
        ],
        "variable.declaration": [
            "meta.definition.variable variable.other",
        ],
    });

export default tokenMap;
