// NotLegos Blocks

//% block="Not LEGOs" color=#0031AF weight=1000 icon="\uf6ec"
//% groups=['Display', 'Laser', 'others']
namespace notLegos {


    /*
      * Retrieve the Player's Sound String
      */
    //% blockId=notlegos_player_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve sound string for $player"
    export function playerSoundString(player: string) {
        let soundString = ""
        if (player == "Mario") {
            soundString = "A_21_1_100_1.5|A_21_2_100_1|I_21_3_100_3.3|A_21_4_100_1.9|A_21_5_100_2.1|I_21_6_100_1.8|I_21_7_100_1.8|R_21_8_100_0.6|R_21_9_100_1.3|R_21_10_100_1.1|R_21_11_100_0.6|R_21_12_100_0.8|R_21_13_100_1.6|R_21_14_100_1.3|R_21_15_100_1.2|R_21_16_100_1.1|R_21_17_100_1.3|R_21_18_100_1|Y_21_19_100_0.2|Y_21_20_100_0.2|Y_21_21_100_0.3|Y_21_22_100_0.5|Y_21_23_100_0.6|Y_21_24_100_0.6|Y_21_25_100_0.6|Y_21_26_100_0.6|Y_21_27_100_0.6|Y_21_28_100_0.6|Y_21_29_100_0.7|Y_21_30_100_0.7|Y_21_31_100_0.7|Y_21_32_100_0.7|Y_21_33_100_0.7|Y_21_34_100_0.8|Y_21_35_100_0.8|Y_21_36_100_0.8|Y_21_37_100_0.8|Y_21_38_100_0.8|Y_21_39_100_0.8|Y_21_40_100_0.9|Y_21_41_100_0.9|Y_21_42_100_0.9|Y_21_43_100_0.9|Y_21_44_100_0.9|Y_21_45_100_0.9|Y_21_46_100_0.9|Y_21_47_100_1|Y_21_48_100_1|Y_21_49_100_1|Y_21_50_100_1|Y_21_51_100_1.1|Y_21_52_100_1.1|Y_21_53_100_1.1|Y_21_54_100_1.2|Y_21_55_100_1.2|Y_21_56_100_1.2|Y_21_57_100_1.2|Y_21_58_100_1.3|Y_21_59_100_1.3|Y_21_60_100_1.3|Y_21_61_100_1.4|Y_21_62_100_1.4|S_21_63_100_1|S_21_64_100_1.6|S_21_65_100_1.7|S_21_66_100_1.7|S_21_67_100_1.9|S_21_68_100_2.1|S_21_69_100_2.2|S_21_70_100_2.4|S_21_71_100_2.4|S_21_72_100_2.5|W_21_73_100_1.8|W_21_74_100_2|W_21_75_100_2.2|W_21_76_100_2.6|W_21_77_100_2.9|O_21_78_100_0.6|O_21_79_100_0.4|O_21_80_100_0.4|O_21_81_100_1.1|O_21_82_100_1.5|O_21_83_100_0.8|O_21_84_100_0.7|O_21_85_100_0.8|O_21_86_100_0.9|O_21_87_100_1.3|O_21_88_100_0.5|O_21_89_100_1|O_21_90_100_1|O_21_91_100_0.4|O_21_92_100_0.5|O_21_93_100_0.9|O_21_94_100_0.4|O_21_95_100_0.4|N_21_96_100_1|N_21_97_100_1.1|N_21_98_100_1|N_21_99_100_0.6|N_21_100_100_0.9|N_21_101_100_1.4|N_21_102_100_1.7|N_21_103_100_1.3|N_21_104_100_0.6|N_21_105_100_1.4|N_21_106_100_0.8|N_21_107_100_1.1|N_21_108_100_1.1|N_21_109_100_0.8|N_21_110_100_1.7|N_21_111_100_2.4|I_21_112_100_0.8|I_21_113_100_0.9|F_21_114_100_1.1|F_21_115_100_2.5|F_21_116_100_2.5|F_21_117_100_1.4|L_21_118_100_3.4|L_21_119_100_3.5|L_21_120_100_4.4|L_21_121_100_1.5|H_21_122_100_44.4"
        }
        return soundString
    }
    /*
          * Retrieve the Player's Music String
          */
    //% blockId=notlegos_music_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve music string for $player"
    export function playerMusicString(player: string) {
        let musicString = ""
        if (player == "Mario") {
            let ms0 = "V_0_1_100_1|V_0_2_100_3|V_0_3_100_10|V_0_4_100_2|V_0_5_100_2|V_0_6_100_3|V_0_7_100_7|V_0_8_100_3|V_0_9_100_2|V_0_10_100_4|V_0_11_100_2|V_0_12_100_3|V_0_13_100_1|V_0_14_100_2|V_0_15_100_1|V_0_16_100_1|V_0_17_100_2|V_0_18_100_3|V_0_19_100_4|V_0_20_100_4|V_0_21_100_2|V_0_22_100_0|V_0_23_100_2|V_0_24_100_2|V_0_25_100_6|V_0_26_100_6|V_0_27_100_6|V_0_28_100_6|V_0_29_100_6|V_0_30_100_6|V_0_31_100_6|V_0_32_100_6|V_0_33_100_8|V_0_34_100_9|V_0_35_100_6|V_0_36_100_6|V_0_37_100_6|V_0_38_100_6|V_0_39_100_6|V_0_40_100_6"
            let ms1 = "N_1_1_100_3|N_1_2_100_4|N_1_3_100_8|N_1_4_100_5|N_1_5_100_4|N_1_6_100_12|N_1_7_100_3|N_1_8_100_7|N_1_9_100_6|N_1_10_100_7|N_1_11_100_9|N_1_12_100_9|N_1_13_100_11|N_1_14_100_3|N_1_15_100_10|N_1_16_100_3|N_1_17_100_6|N_1_18_100_5|N_1_19_100_6|N_1_20_100_5|N_1_21_100_7|N_1_22_100_5|N_1_23_100_3|N_1_24_100_7|N_1_25_100_6|N_1_26_100_5|N_1_27_100_11|N_1_28_100_5|N_1_29_100_5|N_1_30_100_4|N_1_31_100_6|N_1_32_100_4|N_1_33_100_4|N_1_34_100_10|N_1_35_100_8|N_1_36_100_8|N_1_37_100_3|N_1_38_100_7|N_1_39_100_4|N_1_40_100_6|N_1_41_100_3|N_1_42_100_7|N_1_43_100_7|N_1_44_100_3|N_1_45_100_6|N_1_46_100_1|N_1_47_100_2|N_1_48_100_2|N_1_49_100_8|N_1_50_100_16|N_1_51_100_9|N_1_52_100_10|N_1_53_100_13|N_1_54_100_14|N_1_55_100_14|N_1_56_100_16|N_1_57_100_7|N_1_58_100_4|N_1_59_100_9|N_1_60_100_8|N_1_61_100_9|N_1_62_100_9|N_1_63_100_12|N_1_64_100_4|N_1_65_100_6|N_1_66_100_9|N_1_67_100_5|N_1_68_100_6|N_1_69_100_5|N_1_70_100_10|N_1_71_100_8|N_1_72_100_8|N_1_73_100_5|N_1_74_100_3"
            let ms2 = "T_2_1_100_36|T_2_2_100_40|T_2_3_100_41|T_2_4_100_46|T_2_5_100_50|T_2_6_100_51|T_2_7_100_59|T_2_8_100_63|T_2_9_100_64|T_2_10_100_65|T_2_11_100_66|T_2_12_100_67|T_2_13_100_68|T_2_14_100_69|T_2_15_100_76|T_2_16_100_80|T_2_17_100_84|T_2_18_100_90|T_2_19_100_92|T_2_20_100_100|T_2_21_100_103|T_2_22_100_105|T_2_23_100_112|T_2_24_100_113|T_2_25_100_123|T_2_26_100_138|T_2_27_100_142|T_2_28_100_144|T_2_29_100_156|T_2_30_100_158|T_2_31_100_120|T_2_32_100_120|T_2_33_100_120|T_2_34_100_120|T_2_35_100_120|T_2_36_100_120"
            let ms3 = "A_3_1_100_64|A_3_2_100_211|A_3_3_100_185|A_3_4_100_185|A_3_5_100_182|A_3_6_100_114|A_3_7_100_181|A_3_8_100_103|A_3_9_100_303|A_3_10_100_21|A_3_11_100_235|A_3_12_100_121|A_3_13_100_203|A_3_14_100_119|A_3_15_100_206|A_3_16_100_146|A_3_17_100_237|A_3_18_100_210|A_3_19_100_160"
            let ms4 = "E_4_1_100_128|E_4_3_100_142|E_4_5_100_111|E_4_6_100_141|E_4_9_100_126|E_4_11_100_132|E_4_15_100_119|E_4_16_100_146|E_4_18_100_120|E_4_20_100_143|E_4_22_100_142|E_4_23_100_112|E_4_24_100_138|E_4_25_100_139|E_4_26_100_111|E_4_27_100_116|E_4_28_100_129|E_4_31_100_98|E_4_32_100_146|E_4_33_100_177|E_4_34_100_82|E_4_36_100_160|E_4_38_100_180|E_4_39_100_211|E_4_41_100_134|E_4_42_100_183|E_4_43_100_124|E_4_44_100_261|E_4_45_100_91|E_4_46_100_138|E_4_49_100_207|E_4_50_100_41|E_4_51_100_180|E_4_52_100_202|E_4_53_100_194|E_4_56_100_209|E_4_57_100_195|E_4_58_100_180|E_4_60_100_198|E_4_61_100_180|E_4_63_100_78|E_4_66_100_139|E_4_67_100_224|E_4_68_100_180|E_4_73_100_180|E_4_76_100_180|E_4_77_100_196|E_4_78_100_113|E_4_82_100_180|E_4_83_100_123|E_4_84_100_180|E_4_86_100_126|E_4_93_100_121|E_4_97_100_59|E_4_98_100_180|E_4_99_100_180|E_4_100_100_118|E_4_101_100_156|E_4_102_100_180|E_4_103_100_70|E_4_104_100_216|E_4_105_100_140|E_4_106_100_180|E_4_107_100_147|E_4_108_100_147|E_4_109_100_180|E_4_110_100_158|E_4_111_100_180|E_4_112_100_80|E_4_113_100_152|E_4_114_100_127|E_4_116_100_122|E_4_118_100_106|E_4_123_100_143|E_4_124_100_36|E_4_125_100_164|E_4_127_100_282|E_4_128_100_311|E_4_129_100_123|E_4_130_100_187|E_4_131_100_62|E_4_132_100_180|E_4_133_100_130|E_4_134_100_112|E_4_135_100_105|E_4_139_100_126|E_4_141_100_176|E_4_142_100_135|E_4_143_100_126|E_4_144_100_144|E_4_145_100_140|E_4_146_100_133|E_4_149_100_167|E_4_150_100_120|E_4_151_100_180|E_4_155_100_226|E_4_157_100_164|E_4_158_100_144|E_4_159_100_104|E_4_161_100_180|E_4_162_100_87|E_4_163_100_126|E_4_164_100_118|E_4_165_100_194|E_4_166_100_135|E_4_167_100_50|E_4_168_100_109|E_4_169_100_180|E_4_170_100_133|E_4_171_100_180|E_4_172_100_91|E_4_173_100_138|E_4_176_100_120|E_4_177_100_81|E_4_178_100_150|E_4_179_100_153|E_4_180_100_104|E_4_181_100_112"
            let ms5 = "O_5_1_100_4|O_5_2_100_17|O_5_3_100_29|O_5_4_100_172|O_5_5_100_13|O_5_6_100_248|O_5_7_100_11|O_5_8_100_445|O_5_9_100_241|O_5_10_100_244|O_5_11_100_20|O_5_12_100_7|O_5_13_100_28|O_5_14_100_74|O_5_15_100_15|O_5_16_100_74|O_5_17_100_17|O_5_18_100_17|O_5_19_100_15|O_5_20_100_38|O_5_21_100_42|O_5_22_100_67|O_5_23_100_8|O_5_24_100_8|O_5_25_100_13|O_5_26_100_17|O_5_27_100_5|O_5_28_100_122|O_5_29_100_226|O_5_30_100_79"
            let ms6 = "L_6_1_100_87|L_6_2_100_31|L_6_3_100_196|L_6_4_100_65|L_6_5_100_4|L_6_6_100_23|L_6_7_100_65|L_6_8_100_62|L_6_9_100_78|L_6_10_100_6|L_6_11_100_162"
            let ms7 = "C_7_1_100_4|C_7_2_100_8|C_7_3_100_8|C_7_4_100_6|C_7_5_100_10|C_7_6_100_8|C_7_7_100_6|C_7_8_100_4|C_7_9_100_17|C_7_10_100_9|C_7_11_100_4|C_7_12_100_8|C_7_13_100_12|C_7_14_100_7|C_7_15_100_10|C_7_16_100_9|C_7_17_100_10|C_7_18_100_9|C_7_19_100_8|C_7_20_100_4|C_7_21_100_7|C_7_22_100_26|C_7_23_100_5|C_7_24_100_4|C_7_25_100_10|C_7_26_100_7|C_7_27_100_7|C_7_28_100_6|C_7_29_100_7|C_7_30_100_7|C_7_31_100_12|C_7_32_100_4|C_7_33_100_6|C_7_34_100_6|C_7_35_100_6|C_7_36_100_6|C_7_37_100_5|C_7_38_100_3|C_7_39_100_6|C_7_40_100_6|C_7_41_100_6|C_7_42_100_8|C_7_43_100_6|C_7_44_100_8|C_7_45_100_6|C_7_46_100_5|C_7_47_100_5|C_7_48_100_12|C_7_49_100_3|C_7_50_100_7|C_7_51_100_8|C_7_52_100_11|C_7_53_100_6|C_7_54_100_2|C_7_55_100_5|C_7_56_100_7|C_7_57_100_8|C_7_58_100_7|C_7_59_100_6|C_7_60_100_7|C_7_61_100_6|C_7_62_100_8|C_7_63_100_5|C_7_64_100_5|C_7_65_100_7|C_7_66_100_9|C_7_67_100_6|C_7_68_100_6|C_7_69_100_7|C_7_70_100_10|C_7_71_100_7|C_7_72_100_5|C_7_73_100_6|C_7_74_100_8|C_7_75_100_3|C_7_76_100_3|C_7_77_100_6|C_7_78_100_7|C_7_79_100_4|C_7_80_100_6|C_7_81_100_2|C_7_82_100_3|C_7_83_100_3|C_7_84_100_1|C_7_85_100_3|C_7_86_100_6|C_7_87_100_7|C_7_88_100_5|C_7_89_100_3|C_7_90_100_5|C_7_91_100_3|C_7_92_100_3|C_7_93_100_2|C_7_94_100_3|C_7_95_100_3|C_7_96_100_1|C_7_99_100_1|C_7_100_100_1|C_7_101_100_1|C_7_102_100_1|C_7_103_100_1|C_7_104_100_3|C_7_105_100_1|C_7_106_100_1|C_7_107_100_4|C_7_108_100_4|C_7_109_100_1|C_7_110_100_1|C_7_111_100_1|C_7_112_100_1|C_7_113_100_1|C_7_114_100_2|C_7_115_100_1|C_7_116_100_1|C_7_117_100_1|C_7_118_100_1"
            let ms8 = "I_8_1_100_6|I_8_2_100_5|I_8_3_100_3|I_8_4_100_5|I_8_5_100_7|I_8_6_100_6|I_8_7_100_4|I_8_8_100_1|I_8_9_100_3|I_8_10_100_4|I_8_11_100_3|I_8_12_100_3|I_8_13_100_6|I_8_14_100_3|I_8_15_100_1|I_8_16_100_1|I_8_17_100_1|I_8_18_100_1|I_8_19_100_0|I_8_20_100_0|I_8_21_100_5|I_8_22_100_4|I_8_23_100_3|I_8_24_100_7"
            let ms9 = "D_9_1_100_5|D_9_2_100_4|D_9_3_100_5|D_9_4_100_5|D_9_5_100_2|D_9_6_100_2|D_9_7_100_2|D_9_8_100_2|D_9_9_100_3|D_9_10_100_1|D_9_11_100_1|D_9_12_100_0|D_9_13_100_1|D_9_14_100_2|D_9_15_100_2|D_9_16_100_1|D_9_17_100_1|D_9_18_100_1|D_9_19_100_0|D_9_20_100_1|D_9_21_100_1|D_9_22_100_1|D_9_23_100_1|D_9_24_100_1|D_9_25_100_1|D_9_26_100_2|D_9_27_100_1|D_9_28_100_0|D_9_29_100_0|D_9_30_100_2|D_9_31_100_1|D_9_32_100_0|D_9_33_100_2|D_9_34_100_2|D_9_35_100_2|D_9_36_100_1|D_9_37_100_1|D_9_38_100_1|D_9_39_100_0|D_9_40_100_1|D_9_41_100_0|D_9_42_100_0|D_9_43_100_1|D_9_44_100_0|D_9_45_100_0|D_9_46_100_1|D_9_47_100_1|D_9_48_100_1|D_9_49_100_1|D_9_50_100_1|D_9_51_100_0|D_9_53_100_5|D_9_54_100_2|D_9_55_100_5|D_9_56_100_2|D_9_57_100_2|D_9_58_100_0|D_9_59_100_1|D_9_60_100_1|D_9_61_100_0|D_9_62_100_2|D_9_63_100_0|D_9_64_100_0|D_9_65_100_0|D_9_66_100_0|D_9_67_100_0|D_9_68_100_0|D_9_69_100_1|D_9_70_100_1|D_9_71_100_1|D_9_72_100_1|D_9_73_100_2|D_9_74_100_1|D_9_75_100_1|D_9_76_100_0|D_9_77_100_0|D_9_78_100_0|D_9_79_100_1|D_9_80_100_1|D_9_81_100_1|D_9_82_100_2|D_9_83_100_1|D_9_84_100_1|D_9_85_100_1|D_9_86_100_2|D_9_87_100_1|D_9_88_100_0|D_9_89_100_0|D_9_90_100_1|D_9_91_100_2|D_9_92_100_2|D_9_93_100_2|D_9_94_100_1|D_9_95_100_2|D_9_96_100_6|D_9_97_100_0|D_9_98_100_2|D_9_99_100_1|D_9_100_100_1|D_9_101_100_2|D_9_102_100_0|D_9_103_100_0|D_9_104_100_1|D_9_105_100_1|D_9_106_100_2|D_9_107_100_4|D_9_108_100_2|D_9_109_100_3|D_9_110_100_0|D_9_111_100_1|D_9_112_100_2|D_9_113_100_2"
            musicString = ms0 + "|" + ms1 + "|" + ms2 + "|" + ms3 + "|" + ms4 + "|" + ms5 + "|" + ms6 + "|" + ms7 + "|" + ms8 + "|" + ms9
        }
        return musicString
    }



    ///////////////////////////////////////////////////////MP3
    let Start_Byte = 0x7E
    let Version_Byte = 0xFF
    let Command_Length = 0x06
    let End_Byte = 0xEF
    let Acknowledge = 0x00
    let CMD = 0x00
    let para1 = 0x00
    let para2 = 0x00
    let highByte = 0x00
    let lowByte = 0x00
    let dataArr: number[] = [Start_Byte, Version_Byte, Command_Length, CMD, Acknowledge, para1, para2, highByte, lowByte, End_Byte]
    /*
    * Play status selection button list
    */

    function mp3_sendData(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
        basic.pause(100)
    }
    function mp3_checkSum(): void {
        let total = 0;
        for (let i = 1; i < 7; i++) {
            total += dataArr[i]
        }
        total = 65536 - total
        lowByte = total & 0xFF;
        highByte = total >> 8;
        dataArr[7] = highByte
        dataArr[8] = lowByte
    }

    //% blockId="setLoopFolder" block="loop play all the MP3s in the folder:$folderNum"
    //% folderNum.defl="01"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setLoopFolder(folderNum: string): void {
        CMD = 0x17
        para1 = 0
        para2 = parseInt(folderNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }

    //% blockId="folderPlay" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum || repeatList: $myAns"
    //% folderNum.defl="01" fileNum.defl="001"
    //% myAns.shadow="toggleYesNo"
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function folderPlay(folderNum: string, fileNum: string, myAns: boolean = false): void {
        CMD = 0x0F
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        if (myAns)
            execute(0x19)
    }

    //% blockId="playFolderFilePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum usingPin:$Rjpin"
    //% fileNum.defl="01" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFilePort(folderNum: string, fileNum: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)


        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }

    //% blockId="playFolderFileVolumePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum with volume:$theVolume usingPin:$Rjpin"
    //% fileNum.defl="01" theVolume.defl="10" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFileVolumePort(folderNum: string, fileNum: string, theVolume: string, Rjpin: DigitalRJPin): void {

        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )

        let volume = parseInt(theVolume)
        if (volume > 25) {
            volume = 25
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(200)

        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()


    }

    //% blockId="playLength" 
    //% block="playsFor playString:$soundString with volumeFactor:$potReading using pin:$Rjpin"
    //% soundString.defl="1_1_25_100" thePot.defl=".25"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playsFor(soundString: string, potReading: number, Rjpin: DigitalRJPin): number {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )

        let stringParts = soundString.split("_")
        let theFolder = stringParts[0]
        let theFile = stringParts[1]
        let theVolume = stringParts[2]
        let theLength = stringParts[3]
        let volumeFactor = Math.round(pins.map(parseFloat(theVolume) * potReading, 0, 100, 0, 30))
        if (volumeFactor > 30) {
            volumeFactor = 30
        }

        CMD = 6
        para1 = 0
        para2 = volumeFactor
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)

        CMD = 15
        para1 = parseInt(theFolder)
        para2 = parseInt(theFile)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()

        return parseFloat(theLength) * 1000 + 350
    }


    //% blockId="volumePort" 
    //% block="set MP3 volume:$theVolume usingPin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumePort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)
    }


    //% blockId="volumeQuickPort" 
    //% block="quickly set MP3 volume:$theVolume using Pin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumeQuickPort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }


    function mp3_sendDataFast(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
    }


    //% blockId="setTracking" 
    //% block="play the mp3 in order of:%tracking || repeatList: $myAns"
    //% myAns.shadow="toggleYesNo"
    //% tracking.defl=1
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setTracking(tracking: number, myAns: boolean = false): void {
        CMD = 0x03
        para1 = 0x00
        para2 = tracking
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        execute(0x0D)
        if (myAns)
            execute(0x19)
    }
    //% blockId=MP3execute block="Set MP3 execute procedure:%myType"
    //% myType.fieldEditor="gridpicker"
    //% myType.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function execute(myType: playType): void {
        CMD = myType
        para1 = 0x00
        para2 = 0x00
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId="setVolume" block="Set volume(0~25):%volume"
    //% volume.min=0 volume.max=25
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setVolume(volume: number): void {
        if (volume > 25) {
            volume = 25
        }
        CMD = 0x06
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId=MP3setPort block="Set the MP3 port to %Rjpin"
    //% Rjpin.fieldEditor="gridpicker"
    //% Rjpin.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function MP3SetPort(Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        setVolume(25)
    }

    /*
     * Toggle a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_toggle
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=100
    //% block="Laser %Rjpin toggle $laserState with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 laserBrightness.max=1023
    //% laserState.shadow="toggleOnOff"
    export function laserToggle(Rjpin: DigitalRJPin, laserState: boolean, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        if (laserState) {
            pins.analogWritePin(pin, laserBrightness)
        }
        else {
            pins.analogWritePin(pin, 0)
        }
    }

    /*
     * Pulse a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_pulse
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=99
    //% block="Laser %Rjpin pulse for %pulseDuration milliseconds with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 begBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% inlineInputMode=inline
    export function laserPulse(Rjpin: DigitalRJPin, pulseDuration: number = 500, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        pins.analogWritePin(pin, laserBrightness)
        basic.pause(pulseDuration - 3)
        pins.analogWritePin(pin, 0)
    }


    /*
     * Fade a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_fade
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=98
    //% block="Laser %Rjpin fade over %pulseDuration milliseconds from brightness %begBrightness to brightness %endBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% begBrightness.min=0 begBrightness.max=1023
    //% endBrightness.min=0 endBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function laserFade(Rjpin: DigitalRJPin, pulseDuration: number = 500, begBrightness: number = 0, endBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        let analogStep = 0
        let laserLevel = 0
        let pulseHold = 10
        let stepCount = Math.floor((pulseDuration - 10) / (pulseHold + 2))
        if (begBrightness == endBrightness) {
            laserLevel = begBrightness
            pins.analogWritePin(pin, laserLevel)
            basic.pause(pulseDuration)
        } else if (begBrightness <= endBrightness) {
            analogStep = (endBrightness - begBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel <= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel + analogStep
                basic.pause(pulseHold)
            }
        } else {
            analogStep = (begBrightness - endBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel >= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel - analogStep
                basic.pause(pulseHold)
            }
        }
    }


    function RJpin_to_analog(Rjpin: AnalogRJPin): any {
        let pin = AnalogPin.P1
        switch (Rjpin) {
            case AnalogRJPin.J1:
                pin = AnalogPin.P1
                break;
            case AnalogRJPin.J2:
                pin = AnalogPin.P2
                break;
        }
        return pin
    }

    function RJpin_to_digital(Rjpin: DigitalRJPin): any {
        let pin = DigitalPin.P1
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.J2:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.J3:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.J4:
                pin = DigitalPin.P16
                break;
            case DigitalRJPin.J5:
                pin = DigitalPin.P11
                break;
            case DigitalRJPin.P0:
                pin = DigitalPin.P0
                break;
            case DigitalRJPin.P1:
                pin = DigitalPin.P1
                break;
            case DigitalRJPin.P2:
                pin = DigitalPin.P2
                break;
            case DigitalRJPin.P3:
                pin = DigitalPin.P3
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P5:
                pin = DigitalPin.P5
                break;
            case DigitalRJPin.P6:
                pin = DigitalPin.P6
                break;
            case DigitalRJPin.P7:
                pin = DigitalPin.P7
                break;
            case DigitalRJPin.P8:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.P9:
                pin = DigitalPin.P9
                break;
            case DigitalRJPin.P10:
                pin = DigitalPin.P10
                break;
            case DigitalRJPin.P11:
                pin = DigitalPin.P11
                break;
            case DigitalRJPin.P12:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.P13:
                pin = DigitalPin.P13
                break;
            case DigitalRJPin.P14:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.P15:
                pin = DigitalPin.P15
                break;
            case DigitalRJPin.P16:
                pin = DigitalPin.P16
                break;
        }
        return pin
    }

    function RJpin_to_Serial(Rjpin: DigitalRJPin): any {
        let pin = SerialPin.USB_TX
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.J2:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.J3:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.J4:
                pin = SerialPin.P16
                break;
            case DigitalRJPin.P0:
                pin = SerialPin.P0
                break;
            case DigitalRJPin.P1:
                pin = SerialPin.P1
                break;
            case DigitalRJPin.P2:
                pin = SerialPin.P2
                break;
            case DigitalRJPin.P8:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.P12:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.P13:
                pin = SerialPin.P13
                break;
            case DigitalRJPin.P14:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.P15:
                pin = SerialPin.P15
                break;
            case DigitalRJPin.P16:
                pin = SerialPin.P16
                break;
        }
        return pin
    }




    ///////////////////////////////enum
    export enum DigitalRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2,
        //% block="J3"
        J3,
        //% block="J4"
        J4,
        //% block="J5"
        J5,
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5,
        //% block="P6"
        P6,
        //% block="P7"
        P7,
        //% block="P8"
        P8,
        //% block="P9"
        P9,
        //% block="P10"
        P10,
        //% block="P11"
        P11,
        //% block="P12"
        P12,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }





    export enum AnalogRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2
    }

    export enum playType {
        //% block="Play"
        Play = 0x0D,
        //% block="Stop"
        Stop = 0x16,
        //% block="PlayNext"
        PlayNext = 0x01,
        //% block="PlayPrevious"
        PlayPrevious = 0x02,
        //% block="Pause"
        Pause = 0x0E
    }




}