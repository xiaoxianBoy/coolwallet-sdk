import base58 from 'bs58';

const SCRIPT = {
  TRANSFER: {
    script: `03000002C70700000001F5CC071001CC071000CC071001CAA01700CAA157001AA017C004021507C005CAAC570021CAAC570041CAAC570061CC0710011AA017C00802CC0710011507C004CC071002CC071002CAACC7008102CAAC170083CAACC7008404CAAC970088DC07C003534F4C1AACC7C081020F0001BAAC5F6C210804DDF097001507C00ABAA15F6C0804DDF09700250F00BAAC9ECC88080F10DAE097C009250E00D207CC05065052455353425554546F4E`,
    signature:
      `3045022026CCAB06DA64DEBE4CF10D8CE3C7C27946991DCC98314AE20A6EBF0A1A71F047022100D321983320786B1A5BE3270F1AC0DF8AA403875A625532FC3B9C23E181F0B2F7`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  TRANSFER_SELF: {
    script: `03000002C70700000001F5CC071001CC071000CC071001CAA01700CAA157001AA017C004021507C003CA0700CAAC570021CAAC570041CC0710011AA017C00802CC0710011507C004CC071002CC071002CAACC7006102CAAC170063CAACC7006404CAAC970068DC07C003534F4C1AACC7C061020D0001BA0F6C0804DDF097001507C00ABAA15F6C0804DDF09700250F00BAAC9ECC68080F10DAE097C009250E00D207CC05065052455353425554546F4E`,
    signature:
      `3046022100f7f513983d00ec91d6ea3fef37441cc63e75cc4729cd15d79b5a823b52cc71e702210096b3ea7f64500eedfc7e1eefcbb12fd048fe61789f394b32ecdd2bf754789dce`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  SMART_CONTRACT: {
    script: `03000002C70700000001F5CAA09700DC07C003534F4CD207C005534D415254D207CC05065052455353425554546F4E`,
    signature:
      `3045022100AFECB6EECB35BA13D924D61C3C6C468017CAE31835E59A6722CCF75E68CF788202207252A4E2777E8B289F8AE7902D0BEF521859A8C6077B2209AB7BD704C3899921`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  ASSOCIATED_TOKEN_ACCOUNT: {
    script: `03000002C70700000001F5CC071001CC0710001AA017C00808CC0710061507C004CC071005CAA01700CAA15700CAAC570021CAAC570041CAAC570061CAAC570081CAAC5700A1CAAC5700C11AA017C00508CAAC5700E1CAAD57000101CC071001CAAD17000121CC071007CAADC700012207CC071000DC07C003534F4CD207CC0507546F4B454E4143436F554E54BAAC5F6C210804DDF09700D207CC05065052455353425554546F4E`,
    signature:
      `304402207DC683D951D35D558C4556D42124B99EBA2C9C82F1C339DD53594DEBBBE94CDD022037AAF15D4446233982DF5AB8FFF89FF3385ACFC3C58852770CC80115F0E49F65`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  SPL_TOKEN: {
    script: `03060002C70700000001F5CC071001CC071000CC071002CAA01700CAA15700CAAC570021CAAC570041CAAC5700611CAC57C081041507C005CAAC5700811CAC57C0A1041507C005CAAC5700A1CAAC5700C1CC0710011AA017C00805CC0710041507C004CC071003CC071004CAACC700E104CAAC1700E5CAAC1700E6CAACC700E708CAAC1700EFDC07C003534F4C11ACC7CDF0290401191507C004CC0F104012AC17C0F10401071507C002FF00B5AC1700F1CAACBF00F2DEF09700250F00BAAC5F6C210804DDF09700250F00BAACCECCE708080F1012AC17C0F00400141507C002FF00B5AC1700F0DAE097B0250E00D207CC05065052455353425554546F4E`,
    signature:
      `304402201980b69b843fa671f9737c8c8f868db16fdb0e2a32231daed0906d4ac172eb4d02200724dc395eb06cb13db411fd51c860a417d7d971d40b60f7059afa0bf143ee99`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  SPL_TOKEN_WITH_COMPUTE_BUDGET: {
    script: `03060002C70700000001F5CC071001CC071000CC071002CAA01700CAA15700CAAC570021CAAC570041CAAC5700611CAC57C081041507C005CAAC5700811CAC57C0A1041507C005CAAC5700A1CAAC5700C1CC0710031AA017C00806CC0710031507C004CC071002CC071000CC071009CC071003CAACC700F0081AA017C00806CC0710031507C004CC071002CC071000CC071005CC071002CAACC700F8041AA017C00806CC0710051507C004CC071004CC071004CAACC700E104CAAC1700E5CAAC1700E6CAACC700E708CAAC1700EFDC07C003534F4C11ACC7CDFC290401251507C004CC0F104012AC17C0FD0401071507C002FF00B5AC1700FDCAACBF00FEDEF09700250F00BAAC5F6C210804DDF09700250F00BAACCECCE708080F1012AC17C0FC0400141507C002FF00B5AC1700FCDAE097B0250E00D207CC05065052455353425554546F4E`,
    signature:
      `3045022100b58379e7af30763f79da31340739d098e713936be293c7b74257b06977af79bc02206bbfcdc3c727e80582a790866a44f7ff4028bb6e66a8bdd43cab50031d0a94ca`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  CREATE_AND_SPL_TOKEN: {
    script: `03000002C70700000001F5CC071001CC071000CC071005CAA01700CAA15700CAAC570021CAAC570041CAAC570061CAAC570081CAAC5700A1CAAC5700C1CAAC5700E1CAAD57000101CC071002CAAD17000121CC071006CAAD17000122CAAD17000123CAAD17000124CAADC700012503CC071000CAAD17000128CC071004CAADC700012904CC07100aCAAD1700012DCAADC700012E08CAAD17000136DC07C003534F4C11ADC7CD0137290401601507C004CC0F104012AD17C001380401071507C002FF00B5AD17000138CAADBF000139DEF09700250F001AAD17C001240E03BAAC5F6C610804DDF09700250F001AAD17C001240E04BAAC5F6C810804DDF09700250F001AAD17C001240E05BAAC5F6CA10804DDF09700250F001AAD17C001240E06BAAC5F6CC10804DDF09700250F001AAD17C001240E07BAAC5F6CE10804DDF09700250F00BAADCECC012E08080F1012AD17C001370400141507C002FF00B5AD17000137DAE097B0250E00D207CC05065052455353425554546F4E`,
    signature:
      `304502204b8352b174c9258fda1dc4ccb011822c1a43fc339173494455e143be9a73b8e1022100c5d0a8ce36ab68fa4607acf0fbb02acdfdf08bdc0b5a2c7a2ae57a33f53b072d`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  DELEGATE: {
    script: `03000002C70700000001F5CC071001CC071000CC071005CC071007CAA05700CAA55700CAA65700CAAC570060CAAC570080CAAC5700A0CAAC5700C0CAAC5700E0CC071001CAAD17000100CC071006CAAD17000101CAAD17000102CAADC700010304CAAD17000107CAADC700010804DC07C003534F4CDC07C0055354414B451AAD17C001020D02BAA65F6C0804DDF09700250F001AAD17C001020E03BAAC5F6C600804DDF09700250F001AAD17C001020E04BAAC5F6C800804DDF09700250F001AAD17C001020E05BAAC5F6CA00804DDF09700250F001AAD17C001020E06BAAC5F6CC00804DDF09700250F00D207CC05065052455353425554546F4E`,
    signature:
      `3046022100BED6D7F811C4B46D54D27F606665EF3430A4E1A54181B7E1DEF2B2EA53E11FC60221008213FED47888C543A7696C71D6600CEC4F38199B141DA96A76F75E11765BE2BF`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  UNDELEGATE: {
    script: `03000002CC071001CC071000CC071002CC071004CAA05700CAA55700CAA65700CAAC570060CAAC570080CC071001CAAC1700A0CC071003CAAC1700A1CAAC1700A2CAAC1700A3CC071004CC07C00405000000DC07C003534F4CDC07C005556E44656CBAA05F6C0804DDF09700D207CC05065052455353425554546F4E250F00`,
    signature:
      `3045022100EAE22E87EE31EB0556954AA33963BF18A7F3386B9DDD03BC023D7FC5018646B002203BA1E8612E1CD90345A9DB3008DC4A1D47FEA0DF82192AD8DAD833F43B039BC3`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  DELEGATE_AND_CREATE_ACCOUNT_WITH_SEED: {
    script: `03000002C70700000001F5CC071001CC071000CC071007CC071009CAA05700CAA55700CAA65700CAAC570060CAAC570080CAAC5700A0CAAC5700C0CAAC5700E0CAAD57000100CAAD57000120CC071003CAAD17000140CC071002CAADC700014102CAAD17000143CAADC70001442CCAADD7000170FFE0CAADC700019008CAADC700019828CAAD170001C0CC071002CAADC70001C102CAAD170001C3CAADC70001C474CAAD17000238CC071006CAAD17000239CAAD1700023ACAADC700023B04CAAD1700023FCAADC700024004DC07C003534F4CDC07C0055354414B451AAD17C0023A0E03BAAC5F6C600804DDF09700250F001AAD17C0023A0E04BAAC5F6C800804DDF09700250F001AAD17C0023A0E05BAAC5F6CA00804DDF09700250F001AAD17C0023A0E06BAAC5F6CC00804DDF09700250F001AAD17C0023A0E07BAAC5F6CE00804DDF09700250F001AAD17C0023A0F08BAAD5F6C01000804DDF09700250F00BAADCECC019008080F10DAE097C009250E00D207CC05065052455353425554546F4E`,
    signature:
      `304502202EFE67D03E1C4EA7FC59F4D46C17A5B6C767650B314DD1ACBF65C0304318CB35022100F9B04A407D23B75B0AF4ACE3BF444D625BB421A3ECF5819D9D1A7C38ED707632`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  STAKING_WITHDRAW: {
    script: `03000002C70700000001F5CC071001CC071000CC071003CAA01700CAA15700CAAC570021CAAC570041CAAC570061CAAC5700811AA017C00506CAAC5700A1CAAC5700C1CC071001CAAC1700E1CC071005CAAC1700E2CAAC1700E3CAACC700E403CAAC1700E7CAACC700E804CAACC700EC08DC07C003534F4CDC07C0065265776172641AAC17C0E30D00BAA15F6C0804DDF09700250F001AAC17C0E30E01BAAC5F6C210804DDF09700250F001AAC17C0E30E02BAAC5F6C410804DDF09700250F00BAACCECCEC08080F10DAE097C009250E00D207CC05065052455353425554546F4E`,
    signature:
      `304502202B00FE9B731FBA6F7C28A98EB38E82567A3728DE638A310AA8EBABA5BC2C9DE1022100EBA72B99B412083EB18BD2485124CA3D60D3BF18A7D13122395BE9AE7B10AB3B`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  SIGN_IN: {
    script: `03000002C70700000001F5B5A01700CAA1B700CC07C0302077616e747320796f7520746f207369676e20696e207769746820796f757220536f6c616e61206163636f756e743a0a6CADCF00048311BAF0976C0804B5ACC7008102CAACB70083DC07C003534F4CD207C0075349474E20494ED207CC05065052455353425554546F4E`,
    signature:
      `3045022100ce2624f80ac5234d77415ca9df9ad153fa1c8baea28497d937e619ce63dddb6302205bb1f1d8aa5a47e5c87c615be03cf0a375c40ed3e19746e3279fd74dbddca82a`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  SIGN_MESSAGE: {
    script: `03000002C70700000001F5CAA09700DC07C003534F4CD207C0074D455353414745D207CC05065052455353425554546F4E`,
    signature:
      `30450220482a5109dd908b886d4b8cd8b4bfb43a56c65232d68e4b30798d3cdbb55e31f3022100ee6e9c3d9468a8ad29ca6ac2b08719c7cbe7e857951a1b7ffa62e3445bc1bb10`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  MULTI_SIGN_TX: {
    script: ``,
    signature: ``.padStart(144, '0'),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
};

const COIN_TYPE = '800001f5';
const LAMPORTS_PER_SOL = 1000000000;
const SYSTEM_PROGRAM_ID = Buffer.alloc(32);
// token
const TOKEN_PROGRAM_ID = base58.decode('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
const TOKEN_2022_PROGRAM_ID = base58.decode('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');
const ASSOCIATED_TOKEN_PROGRAM_ID = base58.decode('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

// stake
const STAKE_PROGRAM_ID = base58.decode('Stake11111111111111111111111111111111111111');
const STAKE_CONFIG_ID = base58.decode('StakeConfig11111111111111111111111111111111');

// sysvar
const SYSVAR_RENT_PUBKEY = base58.decode('SysvarRent111111111111111111111111111111111');
const SYSVAR_CLOCK_PUBKEY = base58.decode('SysvarC1ock11111111111111111111111111111111');
const SYSVAR_STAKE_HISTORY_PUBKEY = base58.decode('SysvarStakeHistory1111111111111111111111111');

const COMPUTE_BUDGET_PROGRAM_ID = base58.decode('ComputeBudget111111111111111111111111111111');

const PACKET_DATA_SIZE = 1280 - 40 - 8;

const VERSION_PREFIX_MASK = 0x7f;

export const SIGNATURE_LENGTH_IN_BYTES = 64;

/**
 * Size of public key in bytes
 */
const PUBLIC_KEY_LENGTH = 32;

export {
  SCRIPT,
  COIN_TYPE,
  LAMPORTS_PER_SOL,
  SYSTEM_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  TOKEN_2022_PROGRAM_ID,
  STAKE_PROGRAM_ID,
  STAKE_CONFIG_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  SYSVAR_RENT_PUBKEY,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_STAKE_HISTORY_PUBKEY,
  COMPUTE_BUDGET_PROGRAM_ID,
  PACKET_DATA_SIZE,
  VERSION_PREFIX_MASK,
  PUBLIC_KEY_LENGTH,
};
