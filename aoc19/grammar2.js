// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "rule_0", "symbols": ["rule_8", "rule_11"]},
    {"name": "rule_1", "symbols": ["rule_116", "rule_68"]},
    {"name": "rule_1", "symbols": ["rule_131", "rule_68"]},
    {"name": "rule_10", "symbols": ["rule_131", "rule_121"]},
    {"name": "rule_10", "symbols": ["rule_116", "rule_30"]},
    {"name": "rule_100", "symbols": ["rule_131", "rule_133"]},
    {"name": "rule_100", "symbols": ["rule_116", "rule_34"]},
    {"name": "rule_101", "symbols": ["rule_131", "rule_16"]},
    {"name": "rule_101", "symbols": ["rule_116", "rule_133"]},
    {"name": "rule_102", "symbols": ["rule_116", "rule_84"]},
    {"name": "rule_103", "symbols": ["rule_116", "rule_97"]},
    {"name": "rule_103", "symbols": ["rule_131", "rule_70"]},
    {"name": "rule_104", "symbols": ["rule_131", "rule_116"]},
    {"name": "rule_104", "symbols": ["rule_130", "rule_131"]},
    {"name": "rule_105", "symbols": ["rule_116", "rule_116"]},
    {"name": "rule_106", "symbols": ["rule_51", "rule_131"]},
    {"name": "rule_106", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_107", "symbols": ["rule_54", "rule_116"]},
    {"name": "rule_107", "symbols": ["rule_1", "rule_131"]},
    {"name": "rule_108", "symbols": ["rule_116", "rule_105"]},
    {"name": "rule_108", "symbols": ["rule_131", "rule_94"]},
    {"name": "rule_109", "symbols": ["rule_112", "rule_116"]},
    {"name": "rule_109", "symbols": ["rule_61", "rule_131"]},
    {"name": "rule_11", "symbols": ["rule_42", "rule_31"]},
    {"name": "rule_11", "symbols": ["rule_42", "rule_11", "rule_31"]},
    {"name": "rule_110", "symbols": ["rule_116", "rule_37"]},
    {"name": "rule_110", "symbols": ["rule_131", "rule_117"]},
    {"name": "rule_111", "symbols": ["rule_27", "rule_116"]},
    {"name": "rule_111", "symbols": ["rule_75", "rule_131"]},
    {"name": "rule_112", "symbols": ["rule_34", "rule_116"]},
    {"name": "rule_112", "symbols": ["rule_84", "rule_131"]},
    {"name": "rule_113", "symbols": ["rule_116", "rule_129"]},
    {"name": "rule_113", "symbols": ["rule_131", "rule_108"]},
    {"name": "rule_114", "symbols": ["rule_131", "rule_84"]},
    {"name": "rule_114", "symbols": ["rule_116", "rule_51"]},
    {"name": "rule_115", "symbols": ["rule_86", "rule_116"]},
    {"name": "rule_115", "symbols": ["rule_99", "rule_131"]},
    {"name": "rule_116", "symbols": [{"literal":"a"}]},
    {"name": "rule_117", "symbols": ["rule_68", "rule_116"]},
    {"name": "rule_117", "symbols": ["rule_133", "rule_131"]},
    {"name": "rule_118", "symbols": ["rule_116", "rule_131"]},
    {"name": "rule_118", "symbols": ["rule_116", "rule_116"]},
    {"name": "rule_119", "symbols": ["rule_52", "rule_131"]},
    {"name": "rule_119", "symbols": ["rule_81", "rule_116"]},
    {"name": "rule_12", "symbols": ["rule_73", "rule_116"]},
    {"name": "rule_12", "symbols": ["rule_49", "rule_131"]},
    {"name": "rule_120", "symbols": ["rule_116", "rule_133"]},
    {"name": "rule_120", "symbols": ["rule_131", "rule_94"]},
    {"name": "rule_121", "symbols": ["rule_112", "rule_116"]},
    {"name": "rule_121", "symbols": ["rule_100", "rule_131"]},
    {"name": "rule_122", "symbols": ["rule_38", "rule_116"]},
    {"name": "rule_122", "symbols": ["rule_78", "rule_131"]},
    {"name": "rule_123", "symbols": ["rule_116", "rule_80"]},
    {"name": "rule_123", "symbols": ["rule_131", "rule_72"]},
    {"name": "rule_124", "symbols": ["rule_20", "rule_131"]},
    {"name": "rule_124", "symbols": ["rule_13", "rule_116"]},
    {"name": "rule_125", "symbols": ["rule_116", "rule_33"]},
    {"name": "rule_125", "symbols": ["rule_131", "rule_113"]},
    {"name": "rule_126", "symbols": ["rule_16", "rule_130"]},
    {"name": "rule_127", "symbols": ["rule_131", "rule_119"]},
    {"name": "rule_127", "symbols": ["rule_116", "rule_134"]},
    {"name": "rule_128", "symbols": ["rule_130", "rule_131"]},
    {"name": "rule_128", "symbols": ["rule_116", "rule_116"]},
    {"name": "rule_129", "symbols": ["rule_116", "rule_51"]},
    {"name": "rule_129", "symbols": ["rule_131", "rule_63"]},
    {"name": "rule_13", "symbols": ["rule_131", "rule_94"]},
    {"name": "rule_13", "symbols": ["rule_116", "rule_63"]},
    {"name": "rule_130", "symbols": ["rule_131"]},
    {"name": "rule_130", "symbols": ["rule_116"]},
    {"name": "rule_131", "symbols": [{"literal":"b"}]},
    {"name": "rule_132", "symbols": ["rule_130", "rule_116"]},
    {"name": "rule_132", "symbols": ["rule_116", "rule_131"]},
    {"name": "rule_133", "symbols": ["rule_131", "rule_116"]},
    {"name": "rule_134", "symbols": ["rule_116", "rule_88"]},
    {"name": "rule_134", "symbols": ["rule_131", "rule_56"]},
    {"name": "rule_14", "symbols": ["rule_16", "rule_131"]},
    {"name": "rule_14", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_15", "symbols": ["rule_50", "rule_131"]},
    {"name": "rule_15", "symbols": ["rule_108", "rule_116"]},
    {"name": "rule_16", "symbols": ["rule_130", "rule_130"]},
    {"name": "rule_17", "symbols": ["rule_116", "rule_118"]},
    {"name": "rule_17", "symbols": ["rule_131", "rule_133"]},
    {"name": "rule_18", "symbols": ["rule_3", "rule_116"]},
    {"name": "rule_18", "symbols": ["rule_44", "rule_131"]},
    {"name": "rule_19", "symbols": ["rule_127", "rule_116"]},
    {"name": "rule_19", "symbols": ["rule_21", "rule_131"]},
    {"name": "rule_2", "symbols": ["rule_131", "rule_40"]},
    {"name": "rule_2", "symbols": ["rule_116", "rule_128"]},
    {"name": "rule_20", "symbols": ["rule_128", "rule_131"]},
    {"name": "rule_20", "symbols": ["rule_84", "rule_116"]},
    {"name": "rule_21", "symbols": ["rule_91", "rule_116"]},
    {"name": "rule_21", "symbols": ["rule_6", "rule_131"]},
    {"name": "rule_22", "symbols": ["rule_116", "rule_19"]},
    {"name": "rule_22", "symbols": ["rule_131", "rule_123"]},
    {"name": "rule_23", "symbols": ["rule_40", "rule_130"]},
    {"name": "rule_24", "symbols": ["rule_131", "rule_125"]},
    {"name": "rule_24", "symbols": ["rule_116", "rule_12"]},
    {"name": "rule_25", "symbols": ["rule_63", "rule_116"]},
    {"name": "rule_25", "symbols": ["rule_16", "rule_131"]},
    {"name": "rule_26", "symbols": ["rule_79", "rule_116"]},
    {"name": "rule_26", "symbols": ["rule_4", "rule_131"]},
    {"name": "rule_27", "symbols": ["rule_40", "rule_116"]},
    {"name": "rule_27", "symbols": ["rule_51", "rule_131"]},
    {"name": "rule_28", "symbols": ["rule_131", "rule_40"]},
    {"name": "rule_29", "symbols": ["rule_131", "rule_34"]},
    {"name": "rule_29", "symbols": ["rule_116", "rule_51"]},
    {"name": "rule_3", "symbols": ["rule_131", "rule_102"]},
    {"name": "rule_3", "symbols": ["rule_116", "rule_76"]},
    {"name": "rule_30", "symbols": ["rule_39", "rule_116"]},
    {"name": "rule_30", "symbols": ["rule_7", "rule_131"]},
    {"name": "rule_31", "symbols": ["rule_116", "rule_83"]},
    {"name": "rule_31", "symbols": ["rule_131", "rule_48"]},
    {"name": "rule_32", "symbols": ["rule_53", "rule_116"]},
    {"name": "rule_32", "symbols": ["rule_9", "rule_131"]},
    {"name": "rule_33", "symbols": ["rule_62", "rule_131"]},
    {"name": "rule_33", "symbols": ["rule_69", "rule_116"]},
    {"name": "rule_34", "symbols": ["rule_131", "rule_116"]},
    {"name": "rule_34", "symbols": ["rule_131", "rule_131"]},
    {"name": "rule_35", "symbols": ["rule_131", "rule_98"]},
    {"name": "rule_35", "symbols": ["rule_116", "rule_59"]},
    {"name": "rule_36", "symbols": ["rule_82", "rule_116"]},
    {"name": "rule_36", "symbols": ["rule_10", "rule_131"]},
    {"name": "rule_37", "symbols": ["rule_116", "rule_84"]},
    {"name": "rule_37", "symbols": ["rule_131", "rule_68"]},
    {"name": "rule_38", "symbols": ["rule_23", "rule_131"]},
    {"name": "rule_38", "symbols": ["rule_41", "rule_116"]},
    {"name": "rule_39", "symbols": ["rule_131", "rule_94"]},
    {"name": "rule_39", "symbols": ["rule_116", "rule_68"]},
    {"name": "rule_4", "symbols": ["rule_35", "rule_116"]},
    {"name": "rule_4", "symbols": ["rule_96", "rule_131"]},
    {"name": "rule_40", "symbols": ["rule_131", "rule_116"]},
    {"name": "rule_40", "symbols": ["rule_116", "rule_116"]},
    {"name": "rule_41", "symbols": ["rule_94", "rule_131"]},
    {"name": "rule_41", "symbols": ["rule_133", "rule_116"]},
    {"name": "rule_42", "symbols": ["rule_115", "rule_131"]},
    {"name": "rule_42", "symbols": ["rule_22", "rule_116"]},
    {"name": "rule_43", "symbols": ["rule_116", "rule_32"]},
    {"name": "rule_43", "symbols": ["rule_131", "rule_60"]},
    {"name": "rule_44", "symbols": ["rule_77", "rule_131"]},
    {"name": "rule_44", "symbols": ["rule_28", "rule_116"]},
    {"name": "rule_45", "symbols": ["rule_28", "rule_131"]},
    {"name": "rule_45", "symbols": ["rule_85", "rule_116"]},
    {"name": "rule_46", "symbols": ["rule_105", "rule_131"]},
    {"name": "rule_46", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_47", "symbols": ["rule_122", "rule_116"]},
    {"name": "rule_47", "symbols": ["rule_57", "rule_131"]},
    {"name": "rule_48", "symbols": ["rule_36", "rule_131"]},
    {"name": "rule_48", "symbols": ["rule_24", "rule_116"]},
    {"name": "rule_49", "symbols": ["rule_116", "rule_106"]},
    {"name": "rule_49", "symbols": ["rule_131", "rule_55"]},
    {"name": "rule_5", "symbols": ["rule_131", "rule_14"]},
    {"name": "rule_5", "symbols": ["rule_116", "rule_50"]},
    {"name": "rule_50", "symbols": ["rule_40", "rule_116"]},
    {"name": "rule_50", "symbols": ["rule_84", "rule_131"]},
    {"name": "rule_51", "symbols": ["rule_116", "rule_131"]},
    {"name": "rule_51", "symbols": ["rule_131", "rule_116"]},
    {"name": "rule_52", "symbols": ["rule_16", "rule_131"]},
    {"name": "rule_53", "symbols": ["rule_116", "rule_51"]},
    {"name": "rule_53", "symbols": ["rule_131", "rule_40"]},
    {"name": "rule_54", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_54", "symbols": ["rule_104", "rule_131"]},
    {"name": "rule_55", "symbols": ["rule_104", "rule_116"]},
    {"name": "rule_55", "symbols": ["rule_94", "rule_131"]},
    {"name": "rule_56", "symbols": ["rule_84", "rule_131"]},
    {"name": "rule_56", "symbols": ["rule_128", "rule_116"]},
    {"name": "rule_57", "symbols": ["rule_5", "rule_116"]},
    {"name": "rule_57", "symbols": ["rule_15", "rule_131"]},
    {"name": "rule_58", "symbols": ["rule_116", "rule_68"]},
    {"name": "rule_59", "symbols": ["rule_104", "rule_130"]},
    {"name": "rule_6", "symbols": ["rule_116", "rule_101"]},
    {"name": "rule_6", "symbols": ["rule_131", "rule_74"]},
    {"name": "rule_60", "symbols": ["rule_102", "rule_116"]},
    {"name": "rule_60", "symbols": ["rule_62", "rule_131"]},
    {"name": "rule_61", "symbols": ["rule_63", "rule_116"]},
    {"name": "rule_62", "symbols": ["rule_132", "rule_116"]},
    {"name": "rule_62", "symbols": ["rule_16", "rule_131"]},
    {"name": "rule_63", "symbols": ["rule_131", "rule_131"]},
    {"name": "rule_64", "symbols": ["rule_116", "rule_71"]},
    {"name": "rule_64", "symbols": ["rule_131", "rule_55"]},
    {"name": "rule_65", "symbols": ["rule_64", "rule_131"]},
    {"name": "rule_65", "symbols": ["rule_93", "rule_116"]},
    {"name": "rule_66", "symbols": ["rule_16", "rule_116"]},
    {"name": "rule_66", "symbols": ["rule_105", "rule_131"]},
    {"name": "rule_67", "symbols": ["rule_116", "rule_68"]},
    {"name": "rule_67", "symbols": ["rule_131", "rule_84"]},
    {"name": "rule_68", "symbols": ["rule_116", "rule_131"]},
    {"name": "rule_69", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_69", "symbols": ["rule_94", "rule_131"]},
    {"name": "rule_7", "symbols": ["rule_130", "rule_40"]},
    {"name": "rule_70", "symbols": ["rule_128", "rule_116"]},
    {"name": "rule_70", "symbols": ["rule_104", "rule_131"]},
    {"name": "rule_71", "symbols": ["rule_51", "rule_116"]},
    {"name": "rule_71", "symbols": ["rule_104", "rule_131"]},
    {"name": "rule_72", "symbols": ["rule_45", "rule_131"]},
    {"name": "rule_72", "symbols": ["rule_103", "rule_116"]},
    {"name": "rule_73", "symbols": ["rule_131", "rule_29"]},
    {"name": "rule_73", "symbols": ["rule_116", "rule_2"]},
    {"name": "rule_74", "symbols": ["rule_40", "rule_116"]},
    {"name": "rule_74", "symbols": ["rule_133", "rule_131"]},
    {"name": "rule_75", "symbols": ["rule_105", "rule_116"]},
    {"name": "rule_75", "symbols": ["rule_40", "rule_131"]},
    {"name": "rule_76", "symbols": ["rule_116", "rule_84"]},
    {"name": "rule_76", "symbols": ["rule_131", "rule_40"]},
    {"name": "rule_77", "symbols": ["rule_116", "rule_16"]},
    {"name": "rule_77", "symbols": ["rule_131", "rule_84"]},
    {"name": "rule_78", "symbols": ["rule_116", "rule_117"]},
    {"name": "rule_78", "symbols": ["rule_131", "rule_7"]},
    {"name": "rule_79", "symbols": ["rule_110", "rule_131"]},
    {"name": "rule_79", "symbols": ["rule_89", "rule_116"]},
    {"name": "rule_8", "symbols": ["rule_42"]},
    {"name": "rule_8", "symbols": ["rule_42", "rule_8"]},
    {"name": "rule_80", "symbols": ["rule_131", "rule_111"]},
    {"name": "rule_80", "symbols": ["rule_116", "rule_87"]},
    {"name": "rule_81", "symbols": ["rule_131", "rule_128"]},
    {"name": "rule_81", "symbols": ["rule_116", "rule_133"]},
    {"name": "rule_82", "symbols": ["rule_116", "rule_107"]},
    {"name": "rule_82", "symbols": ["rule_131", "rule_109"]},
    {"name": "rule_83", "symbols": ["rule_26", "rule_131"]},
    {"name": "rule_83", "symbols": ["rule_47", "rule_116"]},
    {"name": "rule_84", "symbols": ["rule_130", "rule_116"]},
    {"name": "rule_84", "symbols": ["rule_131", "rule_131"]},
    {"name": "rule_85", "symbols": ["rule_116", "rule_63"]},
    {"name": "rule_85", "symbols": ["rule_131", "rule_51"]},
    {"name": "rule_86", "symbols": ["rule_131", "rule_43"]},
    {"name": "rule_86", "symbols": ["rule_116", "rule_90"]},
    {"name": "rule_87", "symbols": ["rule_120", "rule_116"]},
    {"name": "rule_87", "symbols": ["rule_114", "rule_131"]},
    {"name": "rule_88", "symbols": ["rule_40", "rule_116"]},
    {"name": "rule_88", "symbols": ["rule_128", "rule_131"]},
    {"name": "rule_89", "symbols": ["rule_116", "rule_126"]},
    {"name": "rule_89", "symbols": ["rule_131", "rule_66"]},
    {"name": "rule_9", "symbols": ["rule_94", "rule_131"]},
    {"name": "rule_9", "symbols": ["rule_16", "rule_116"]},
    {"name": "rule_90", "symbols": ["rule_116", "rule_92"]},
    {"name": "rule_90", "symbols": ["rule_131", "rule_124"]},
    {"name": "rule_91", "symbols": ["rule_25", "rule_116"]},
    {"name": "rule_91", "symbols": ["rule_58", "rule_131"]},
    {"name": "rule_92", "symbols": ["rule_67", "rule_131"]},
    {"name": "rule_93", "symbols": ["rule_131", "rule_95"]},
    {"name": "rule_93", "symbols": ["rule_116", "rule_46"]},
    {"name": "rule_94", "symbols": ["rule_116", "rule_131"]},
    {"name": "rule_94", "symbols": ["rule_131", "rule_131"]},
    {"name": "rule_95", "symbols": ["rule_116", "rule_133"]},
    {"name": "rule_95", "symbols": ["rule_131", "rule_105"]},
    {"name": "rule_96", "symbols": ["rule_131", "rule_75"]},
    {"name": "rule_96", "symbols": ["rule_116", "rule_17"]},
    {"name": "rule_97", "symbols": ["rule_131", "rule_132"]},
    {"name": "rule_97", "symbols": ["rule_116", "rule_51"]},
    {"name": "rule_98", "symbols": ["rule_131", "rule_104"]},
    {"name": "rule_98", "symbols": ["rule_116", "rule_128"]},
    {"name": "rule_99", "symbols": ["rule_116", "rule_65"]},
    {"name": "rule_99", "symbols": ["rule_131", "rule_18"]}
]
  , ParserStart: "rule_0"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
