// TODO: 并非所有编程语言都有. 会影响命名翻译.
var 通用关键词 = {
  'assert': "断言",
  'import': "导入",
  "if": "如果",
  "else": "否则",
  "while": "每当",
  "for": "对于",
  "in": "在",
  "switch": "岔",
  "case": "分支",
  "break": "跳出",
  "continue": "继续",
  "return": "返回",
  "throw": "抛出",
  "finally": "善后",
  'class': "类别",
  'is': "为"
}

var 专用关键词 = {
  "javascript": {
    "abstract": "抽象",
    "arguments": "参数",
    "await": "等待",
    "boolean": "布尔",
    "byte": "字节",
    "catch": "接住",
    "char": "字节",
    "const": "const",
    "debugger": "调试器",
    "default": "默认",
    "delete": "删除",
    "do": "执行",
    "double": "双浮点",
    "enum": "枚举",
    "eval": "eval",
    "export": "导出",
    "extends": "扩展",
    "false": "假",
    "final": "最终",
    "float": "单浮点",
    "function": "函数",
    "goto": "goto",
    "implements": "实现",
    'instanceof': "为实例",
    'int': "整数",
    'interface': "接口",
    "let": "让",
    "long": "长整数",
    'native': "native",
    'new': "新",
    "null": "空",
    'package': "包",
    'private': "私有",
    'protected': "保护",
    'public': "公有",
    'short': "短整数",
    'static': "静态",
    'super': "父类",
    'synchronized': "同步",
    'this': "本身",
    'throws': "会抛出",
    'transient': "transient",
    'true': "真",
    "try": "尝试",
    "typeof": "为类型",
    "var": "变量",
    "void": "无值",
    "volatile": "volatile",
    "with": "with",
    "yield": "产出"
  },
  /*
  参考 http://zetcode.com/lang/python/keywords/
  import keyword
  print("Python keywords: ", keyword.kwlist)
  */
  "python": {
    'False': "假",
    'None': "空",
    'True': "真",
    'and': "且",
    'as': "as",
    'def': "定义",
    "del": "删除",
    'elif': "否则如果",
    'except': "except",
    'from': "从",
    'global': "全局",
    'lambda': "lambda",
    'nonlocal': "nonlocal",
    'not': "不",
    'or': "或",
    'pass': "轮空",
    'raise': "抛出",
    'with': "with",
    'yield': "产出"
  },
  // 参考 https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html
  "java": {
    'abstract': "抽象",
    'boolean': "布尔",
    'byte': "字节",
    'catch': "接住",
    'char': "字符",
    'const': "const",
    'default': "默认",
    'do': "执行",
    'double': "双浮点",
    'enum': "枚举",
    'extends': "扩展",
    'false': "假",
    'final': "最终",
    'float': "单浮点",
    'goto': "goto",
    'implements': "实现",
    'instanceof': "为实例",
    'int': "整数",
    'interface': "接口",
    'long': "长整数",
    'native': "native",
    'new': "新",
    'null': "空",
    'package': "包",
    'private': "私有",
    'protected': "保护",
    'public': "公有",
    'short': "短整数",
    'static': "静态",
    'strictfp': "strictfp",
    'super': "父类",
    'synchronized': "同步",
    'this': "本身",
    'throws': "会抛出",
    'transient': "transient",
    'true': "真",
    'try': "尝试",
    'void': "无值",
    'volatile': "volatile"
  }
}

const JavaScript关键词 = [
"abstract",
"break",
"char",
"debugger",
"double",
"export",
"finally",
"goto",
"in",
"let",
"null",
"public",
"super",
"throw",
"try",
"volatile",
"arguments",
"byte",
"class",
"default",
"else",
"extends",
"float",
"if",
"instanceof",
"long",
"package",
"return",
"switch",
"throws",
"typeof",
"while",
"await",
"case",
"const",
"delete",
"enum",
"false",
"for",
"implements",
"int",
"native",
"private",
"short",
"synchronized",
"transient",
"var",
"with",
"boolean",
"catch",
"continue",
"do",
"eval",
"final",
"function",
"import",
"interface",
"new",
"protected",
"static",
"this",
"true",
"void",
"yield"
];

// 仅用于控制台下运行, 将通用关键词剔除后, 再加入专用关键词词典
function 取专有关键词(所有关键词) {
  var 非通用关键词 = [];
  所有关键词.sort();
  for (词 of 所有关键词) {
    if (!(词 in 通用关键词)) {
      非通用关键词.push(词);
    }
  }
  console.log(非通用关键词);
}

function 取所有关键词(编程语言) {
  var 该语言关键词 = 专用关键词[编程语言];
  return 该语言关键词 ? Object.assign(该语言关键词, 通用关键词) : 通用关键词;
}
