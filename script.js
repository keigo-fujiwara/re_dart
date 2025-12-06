const exercises = [
  {
    id: "Q1",
    title: "条件分岐で価格を分類",
    prompt: "price が 1000 以上なら「高額」、500 以上 1000 未満なら「標準」、それ以外は「安価」を出力する if-else if-else 文を完成させてください。",
    hint: "境界を含む(以上/未満)条件を上から順に絞り込むように書くと分かりやすいです。",
    answer: `
void main() {
  int price = 750;

  if (price >= 1000) {
    print("高額");
  } else if (price >= 500) {
    print("標準");
  } else {
    print("安価");
  }
}
    `,
  },
  {
    id: "Q2",
    title: "for ループでリストを表示",
    prompt: "リスト items の要素を for ループで順番に表示してください。",
    hint: "length プロパティで要素数を取り、インデックス i を 0 から増やして取り出します。",
    extraCode: "List<String> items = ['Pen', 'Book', 'Eraser', 'Pencil'];",
    answer: `
void main() {
  List<String> items = ['Pen', 'Book', 'Eraser', 'Pencil'];

  for (int i = 0; i < items.length; i++) {
    print(items[i]);
  }
}
    `,
  },
  {
    id: "Q3",
    title: "挨拶する関数を定義",
    prompt: "引数も返り値もないシンプルな関数 greet を定義し、呼び出して Hello, Dart! を出力してください。",
    hint: "戻り値がないので戻り値型は void、main から関数を呼び出します。",
    answer: `
void greet() {
  print("Hello, Dart!");
}

void main() {
  greet();
}
    `,
  },
  {
    id: "Q4",
    title: "足し算を行う関数",
    prompt: "2 つの int 型 a, b を受け取り、合計を返す関数 add を作り、結果を出力してください。",
    hint: "戻り値型は int。main で変数 a, b を用意し、add を呼び出して print します。",
    answer: `
int add(int a, int b) {
  return a + b;
}

void main() {
  int a = 1;
  int b = 2;
  print(add(a, b));
}
    `,
  },
  {
    id: "Q5",
    title: "Monster クラスの基本形",
    prompt: "name (String) と hp (int) を持つシンプルな Monster クラスを作成してください。",
    hint: "プロパティをクラス直下に宣言するだけで OK です。",
    answer: `
class Monster {
  String name;
  int hp;
}
    `,
  },
  {
    id: "Q6",
    title: "Monster に短縮コンストラクタを追加",
    prompt: "name と hp を必須で受け取る短縮形コンストラクタを追加し、インスタンスを生成して name と hp を print で出力して確認してください。",
    hint: "フィールド名をそのままコンストラクタ引数に書く this. フォームが簡潔です。",
    answer: `
class Monster {
  String name;
  int hp;

  Monster(this.name, this.hp);
}

void main() {
  Monster monster1 = Monster("クリボー", 1000000);
  print(monster1.name);
  print(monster1.hp);
}
    `,
  },
  {
    id: "Q7",
    title: "HP を回復するメソッド",
    prompt: "Monster に hp を指定量回復させ、回復後の hp を返すメソッド heal(int amount) を追加してください。",
    hint: "フィールド hp を更新し、更新後の値を return すれば良いです。",
    extraCode: "(確認方法)\n\nprint(monster1.heal(1000));",
    answer: `
class Monster {
  String name;
  int hp;

  Monster(this.name, this.hp);

  int heal(int amount) {
    hp = hp + amount;
    return hp;
  }
}

void main() {
  Monster monster1 = Monster("クリボー", 1000000);
  print(monster1.heal(1000));
}
    `,
  },
  {
    id: "Q8",
    title: "Monster を継承した Golem を作成",
    prompt: "Monster を継承する Golem クラスを作り、attack と defense プロパティを追加してください。",
    hint: "extends で継承し、追加プロパティには late を付けておくと後で初期化できます。",
    answer: `
class Monster {
  String name;
  int hp;

  Monster(this.name, this.hp);
}

class Golem extends Monster {
  late int attack;
  late int defense;

  Golem(super.name, super.hp);
}
    `,
  },
  {
    id: "Q9",
    title: "Golem に set メソッドを追加",
    prompt: "Golem に攻撃力・防御力を登録して出力する set(int attack, int defense) を追加してください。",
    hint: "フィールドに代入後、フォーマット文字列で出力します。",
    extraCode: 'print("${this.name}の攻撃力を${this.attack}、防御力を${this.defense}と設定しました");',
    answer: `
class Monster {
  String name;
  int hp;

  Monster(this.name, this.hp);
}

class Golem extends Monster {
  late int attack;
  late int defense;

  Golem(super.name, super.hp);

  void set(int attack, int defense) {
    this.attack = attack;
    this.defense = defense;

    print("\${this.name}の攻撃力を\${this.attack}、防御力を\${this.defense}と設定しました");
  }
}

void main() {
  Golem g = Golem("ゴーレム", 9000);
  g.set(300, 200);
}
    `,
  },
  {
    id: "Q10",
    title: "description をオーバーライド",
    prompt: "Monster に description() を追加し、Golem でオーバーライドして全プロパティを出力してください。",
    hint: "親では name と hp を表示。子では @override を付けて追加プロパティも表示します。必要なら super.description() を呼ぶと再利用できます。",
    answer: `
class Monster {
  String name;
  int hp;

  Monster(this.name, this.hp);

  void description() {
    print("\${name}のHPは\${hp}です");
  }
}

class Golem extends Monster {
  late int attack;
  late int defense;

  Golem(super.name, super.hp);

  void set(int attack, int defense) {
    this.attack = attack;
    this.defense = defense;

    print("\${name}の攻撃力を\${this.attack}、防御力を\${this.defense}と設定しました");
  }

  @override
  void description() {
    print("名前：\${name}");
    print("HP：\${hp}");
    print("攻撃力：\${attack}");
    print("防御力：\${defense}");
  }
}

void main() {
  Golem g = Golem("ゴーレム", 9000);
  g.set(300, 200);
  g.description();
}
    `,
  },
];

function renderCard(ex) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.cardId = ex.id;

  card.innerHTML = `
    <div class="card__header">
      <div class="card__title">
        <span class="badge">${ex.id}</span>
        <h2>${ex.title}</h2>
      </div>
    </div>
    <div class="card__body">
      <p class="prompt"></p>
      <pre class="prompt-code ${ex.extraCode ? "" : "is-hidden"}"><code class="prompt-code__code"></code></pre>
    </div>
    <div class="card__actions">
      <button class="btn" data-toggle="hint" data-label-open="ヒントを表示" data-label-close="ヒントを隠す">ヒントを表示</button>
      <button class="btn btn--secondary" data-toggle="answer" data-label-open="解答を表示" data-label-close="解答を隠す">解答を表示</button>
    </div>
    <div class="collapsible hidden" data-section="hint">
      <div class="label">ヒント</div>
      <p class="hint-text"></p>
    </div>
    <div class="collapsible hidden" data-section="answer">
      <div class="code-header">
        <div class="label">解答コード</div>
        <div class="status" data-status=""></div>
      </div>
      <pre><code class="code-block"></code></pre>
      <button class="copy" data-code="">コピー</button>
    </div>
  `;

  card.querySelector(".prompt").textContent = ex.prompt;
  const promptCode = card.querySelector(".prompt-code__code");
  if (promptCode && ex.extraCode) {
    promptCode.textContent = ex.extraCode;
  }
  card.querySelector(".hint-text").textContent = ex.hint;
  const trimmedAnswer = ex.answer.trim();
  card.querySelector(".code-block").textContent = trimmedAnswer;
  card.querySelector(".copy").dataset.code = trimmedAnswer;
  card.classList.add("is-hidden");
  return card;
}

function updateButtonLabel(button, isVisible) {
  if (!button) return;
  button.textContent = isVisible ? button.dataset.labelClose : button.dataset.labelOpen;
}

function toggleSection(card, sectionType, forceVisible) {
  const section = card.querySelector(`.collapsible[data-section="${sectionType}"]`);
  const button = card.querySelector(`button[data-toggle="${sectionType}"]`);
  if (!section || !button) return;

  const shouldShow = forceVisible !== undefined ? forceVisible : section.classList.contains("hidden");
  section.classList.toggle("hidden", !shouldShow);
  updateButtonLabel(button, shouldShow);
}

function toggleAll(sectionType, visible) {
  document.querySelectorAll(`.card`).forEach((card) => {
    toggleSection(card, sectionType, visible);
  });
}

function activateCard(targetId) {
  const cards = document.querySelectorAll(".card");
  const tabs = document.querySelectorAll(".tab");

  cards.forEach((card) => {
    const isTarget = card.dataset.cardId === targetId;
    card.classList.toggle("is-hidden", !isTarget);
  });

  tabs.forEach((tab) => {
    const isTarget = tab.dataset.targetId === targetId;
    tab.classList.toggle("tab--active", isTarget);
    tab.setAttribute("aria-selected", isTarget ? "true" : "false");
    tab.setAttribute("tabindex", isTarget ? "0" : "-1");
  });
}

function renderTabs(tabListEl) {
  exercises.forEach((ex, index) => {
    const btn = document.createElement("button");
    btn.className = `tab${index === 0 ? " tab--active" : ""}`;
    btn.dataset.targetId = ex.id;
    btn.type = "button";
    btn.role = "tab";
    btn.setAttribute("aria-controls", `card-${ex.id}`);
    btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
    btn.setAttribute("tabindex", index === 0 ? "0" : "-1");
    btn.textContent = `${ex.id} ${ex.title}`;

    btn.addEventListener("click", () => activateCard(ex.id));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateCard(ex.id);
      }
    });

    tabListEl.appendChild(btn);
  });
}

function attachEvents() {
  const list = document.getElementById("exercise-list");

  list.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("[data-toggle]");
    if (toggleBtn) {
      const card = toggleBtn.closest(".card");
      const sectionType = toggleBtn.dataset.toggle;
      toggleSection(card, sectionType);
      return;
    }

    const copyBtn = event.target.closest(".copy");
    if (copyBtn) {
      const code = copyBtn.dataset.code || "";
      navigator.clipboard.writeText(code).then(() => {
        const statusWrap = copyBtn.closest(".collapsible");
        const status = statusWrap ? statusWrap.querySelector("[data-status]") : null;
        if (status) {
          status.textContent = "コピーしました";
          setTimeout(() => (status.textContent = ""), 1800);
        }
        copyBtn.textContent = "コピー済み";
        setTimeout(() => (copyBtn.textContent = "コピー"), 1400);
      });
    }
  });

  const expandHints = document.querySelector("[data-action='expand-all-hints']");
  if (expandHints) {
    expandHints.addEventListener("click", () => toggleAll("hint", true));
  }

  const expandAnswers = document.querySelector("[data-action='expand-all-answers']");
  if (expandAnswers) {
    expandAnswers.addEventListener("click", () => toggleAll("answer", true));
  }

  const collapseAll = document.querySelector("[data-action='collapse-all']");
  if (collapseAll) {
    collapseAll.addEventListener("click", () => {
      toggleAll("hint", false);
      toggleAll("answer", false);
    });
  }

  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      const visible = window.scrollY > 260;
      scrollTopBtn.classList.toggle("visible", visible);
    });
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function init() {
  const list = document.getElementById("exercise-list");
  const tabList = document.getElementById("tab-list");
  if (!list) {
    console.error("#exercise-list が見つかりません");
    return;
  }
  if (!tabList) {
    console.error("#tab-list が見つかりません");
    return;
  }

  exercises.forEach((ex) => {
    list.appendChild(renderCard(ex));
  });
  renderTabs(tabList);
  activateCard(exercises[0].id);
  attachEvents();
}

document.addEventListener("DOMContentLoaded", init);

