module.exports = {
  _: {
    storage_is_encrypted: 'Os arquivos estão criptografados, uma senha é necessária',
    enter_password: 'Inserir senha',
    bad_password: 'Senha errada, tente outra vez',
    never: 'nunca',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    options: 'opções',
    select_wallet: 'Escolher carteira',
    createBitcoinWallet: 'Antes de criar a carteira Lightning é preciso criar uma carteira Bitcoin, tudo bem?',

    list: {
      tabBarLabel: 'Carteiras',
      app_name: 'BlueWallet',
      title: 'carteiras',
      header: 'Uma carteira representa um par composto de uma chave privada secreta e um endereço de depósito que você pode compartilhar.',
      add: 'adicionar wallet',
      create_a_wallet: 'Criar uma carteira',
      create_a_wallet1: 'é grátis e você pode criar',
      create_a_wallet2: 'quantas você quiser',
      latest_transaction: 'última transação',
      empty_txs1: 'Suas transações aparecerão aqui,',
      empty_txs2: 'nenhuma no momento',
      empty_txs1_lightning:
        'A carteira Lightning faz transações super rápidas (coisa de segundos) e tem taxas ridiculamente baratas,' +
        ' ideal para transações diárias e de baixo valor.',
      empty_txs2_lightning: '\nPara começar a usar clique em "administrar fundos" e recarregue o seu saldo.',
      tap_here_to_buy: 'Toque aqui para comprar Bitcoin',
    },
    reorder: {
      title: 'Reordenar carteiras',
    },
    add: {
      title: 'criando carteira',
      description:
        'Você pode ler o backup de uma carteira (em WIF - Wallet Import Format) ou criar uma nova. O padrão é criar uma carteira SegWit.',
      scan: 'Ler backup',
      create: 'Criar',
      label_new_segwit: 'Nova carteira SegWit',
      label_new_lightning: 'Nova carteira Lightning',
      wallet_name: 'nome',
      wallet_type: 'tipo',
      or: 'ou',
      import_wallet: 'Importar carteira',
      imported: 'Importado',
      coming_soon: 'Em breve',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Carteira',
      address: 'Endereço',
      type: 'Tipo',
      destination: 'destino',
      description: 'descrição',
      label: 'Nome',
      are_you_sure: 'Tem certeza?',
      yes_delete: 'Sim, apagar',
      no_cancel: 'Não, cancelar',
      delete_this_wallet: 'Apagar esta carteira',
      export_backup: 'Exportar / backup',
      buy_bitcoin: 'Comprar Bitcoin',
      show_xpub: 'Ver XPUB',
      delete: 'Apagar',
      save: 'Salvar',
    },
    export: {
      title: 'Exportar carteira',
    },
    xpub: {
      title: 'XPUB',
      copiedToClipboard: 'Copiado para a área de transferência',
    },
    import: {
      title: 'importar',
      explanation:
        'Escreva aqui sua frase mnemônica, chave privada, WIF, ou o que você tiver. Faremos nosso melhor para adivinhar o formato e importat sua carteira',
      imported: 'Importada',
      error: 'Erro. Por favor, confira se o formato que você passou é válido.',
      success: 'Sucesso',
      do_import: 'Importar',
      scan_qr: 'ou ler um código QR?',
    },
    scanQrWif: {
      go_back: 'Voltar',
      cancel: 'Cancelar',
      decoding: 'Decodificar',
      input_password: 'Inserir senha',
      password_explain: 'Isto é um chave privada criptografada BIP38',
      bad_password: 'Senha errada',
      wallet_already_exists: 'Esta carteira já existe',
      bad_wif: 'WIF errado',
      imported_wif: 'WIF importado ',
      with_address: ' com endereço ',
      imported_segwit: 'Carteira SegWit importada',
      imported_legacy: 'Carteira antiga importada',
      imported_watchonly: 'Carteira somente-leitura importada',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transações',
      title: 'Transações',
      description: 'Uma lista de transações feitas ou recebidas nas suas carteiras',
      conf: 'conf',
    },
    details: {
      title: 'Transação',
      from: 'De',
      to: 'Para',
      copy: 'Copiar',
      transaction_details: 'Detalhes',
      show_in_block_explorer: 'Mostrar num navegador',
    },
  },
  send: {
    header: 'Enviar',
    confirm: {
      header: 'Confirmar',
      sendNow: 'Enviar agora',
    },
    success: {
      done: 'Enviado',
    },
    details: {
      title: 'Criar Transacção',
      amount_field_is_not_valid: 'Campo de quantia não é válido',
      fee_field_is_not_valid: 'Campo de taxa não é válido',
      address_field_is_not_valid: 'Campo de endereço não é válido',
      receiver_placeholder: 'endereço de envio aqui',
      amount_placeholder: 'quantia a enviar (em BTC)',
      fee_placeholder: 'mais a taxa de transacção (em BTC)',
      create_tx_error: 'Erro na criação da transação, por favor confira se o endereço é válido.',
      note_placeholder: 'Nota pessoal',
      cancel: 'Cancelar',
      scan: 'Scanear',
      create: 'Criar',
      address: 'Endereço',
      total_exceeds_balance: 'Valor total excede o saldo disponível',
      send: 'Send',
      remaining_balance: 'Saldo restante',
    },
    create: {
      title: 'Criar Transacção',
      details: 'Detalhes',
      error: 'Erro ao criar transação. Endereço ou valor inválidos?',
      go_back: 'Voltar',
      this_is_hex: 'Este é o hex da transação, assinado e pronto para ser divulgado para o mundo. Continuar?',
      to: 'Para',
      amount: 'Valor',
      fee: 'Taxa',
      tx_size: 'Tamanho',
      satoshi_per_byte: 'satoshis por byte',
      memo: 'Nota',
      broadcast: 'Divulgar',
      not_enough_fee: 'Taxa muito baixa. Aumente a taxa',
    },
  },
  receive: {
    header: 'Receber',
    details: {
      title: 'Envie este endereço para o pagador',
      share: 'Compartilhar',
      copiedToClipboard: 'Copiado para a área de trabalho',
      label: 'Descrição',
      create: 'Create',
      setAmount: 'Valor a receber',
    },
  },
  buyBitcoin: {
    header: 'Comprar Bitcoin',
    tap_your_address: 'Toque seu endereço para copiá-lo para a área de transferência:',
    copied: 'Copiado!',
  },
  settings: {
    tabBarLabel: 'preferências',
    header: 'definições',
    plausible_deniability: 'Negação plausível...',
    storage_not_encrypted: 'Arquivos: não criptografados',
    storage_encrypted: 'Arquivos: criptografados',
    password: 'Senha',
    password_explain: 'Definir a senha para descriptografar os arquivos',
    retype_password: 'Inserir senha novamente',
    passwords_do_not_match: 'Senhas não coincidem',
    encrypt_storage: 'Criptografar',
    lightning_settings: 'Preferências Lightning',
    lightning_settings_explain:
      'Para se conectar ao seu próprio ponto LND, você precisa instalar a aplicação LndHub' +
      ' e copiar sua URL para cá. Deixe em branco para usar a LndHub padrão fornecida pela BlueWallet (lndhub.io).' +
      ' Carteiras criadas após mudanças nestas preferências ficarão ligadas à instância LndHub que estiver especificada.',
    save: 'Salvar',
    about: 'Sobre',
    language: 'Idioma',
    currency: 'Moeda',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Negação plausível',
    help:
      'Em algumas circunstâncias, você pode ser forçado a revelar uma ' +
      'senha. Para manter seus bitcoins seguros, A BlueWallet pode criar ' +
      'uma senha alternativa. Sob pressão, você pode revelar essa senha ao ' +
      'invés da senha principal. Quando inserida na BlueWallet, esta abrirá ' +
      'uma interface falsa, que parecerá legítima a um terceiro, enquanto ' +
      'suas carteiras originais continuarão à salvo em segredo.',
    help2:
      'Essa nova interface é completamente funcional e você pode inclusive ' + 'manter nele um valor minímo para que pareça mais real.',
    create_fake_storage: 'Criar armazenamento criptografada falsa',
    go_back: 'Voltar',
    create_password: 'Criar senha',
    create_password_explanation: 'A senha para a interface falsa não deve coincidir com a principal',
    password_should_not_match: 'A senha para a interface falsa não deve coincidir com a principal',
    retype_password: 'Inserir senha novamente',
    passwords_do_not_match: 'Senhas não coincidem, tente novamente',
    success: 'Sucesso',
  },
  lnd: {
    title: 'administrar fundos',
    choose_source_wallet: 'Escolha a carteira de origem',
    refill_lnd_balance: 'Recarregar a carteira Lightning',
    refill: 'Recarregar',
    placeholder: 'Invoice',
    withdraw: 'Sacar',
    expired: 'Vencido',
    sameWalletAsInvoiceError: 'Você não pode pagar uma fatura com a mesma carteira que a criou.',
  },
  pleasebackup: {
    title: 'Backup',
    success: 'Sua carteira foi criada com sucesso!',
    text:
      'Por favor anote num pedaço de papel essa sequência de palavras, elas serão o seu backup e você as pode usar para' +
      ' recuperar a sua carteira em outros dispositivos. Por exemplo, você pode usar o programa Electrum para desktops' +
      ' (https://electrum.org/) para acessar esta mesma carteira.',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
