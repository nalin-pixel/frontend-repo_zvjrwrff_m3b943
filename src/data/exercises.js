// Exercise catalog for Java Quest
// Structure follows the provided template

export const LEVELS = [
  "novice",
  "beginner",
  "intermediate",
  "advanced",
  "master",
  "legendary",
];

export const CONCEPTS = [
  "variables",
  "conditions",
  "loops",
  "methods",
  "classes",
  "inheritance",
  "interfaces",
  "collections",
  "streams",
  "generics",
  "exceptions",
  "threads",
];

export const exercises = [
  {
    id: "hello-world",
    title: "Hello, World!",
    level: "novice",
    concept: "variables",
    description:
      "Affiche \"Hello, World!\" dans la console. Familiarisez-vous avec la structure d'un programme Java.",
    input_format: "Aucune entrée",
    output_format: "Sortie: Hello, World!",
    examples: [
      { input: "", output: "Hello, World!" }
    ],
    hints: [
      "La méthode main est le point d'entrée.",
      "Utilise System.out.println()."
    ],
    solution: {
      code: `public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`
    },
    explanation:
      "Cet exercice introduit la structure minimale d'une application Java et l'utilisation de la sortie standard.",
  },
  {
    id: "fizz-buzz",
    title: "FizzBuzz",
    level: "beginner",
    concept: "loops",
    description:
      "Pour chaque nombre de 1 à N, affiche Fizz pour les multiples de 3, Buzz pour les multiples de 5, et FizzBuzz pour les deux.",
    input_format: "Entier N (1 ≤ N ≤ 10^5)",
    output_format: "N lignes de sortie.",
    examples: [
      { input: "5", output: "1\\n2\\nFizz\\n4\\nBuzz" }
    ],
    hints: [
      "Utilise l'opérateur % (modulo).",
      "Teste d'abord le cas 3 et 5 ensemble."
    ],
    solution: {
      code: `import java.util.*;\npublic class Solution {\n    public static void main(String[] args){\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for(int i=1;i<=n;i++){\n            boolean f = i%3==0, b = i%5==0;\n            if(f && b) System.out.println("FizzBuzz");\n            else if(f) System.out.println("Fizz");\n            else if(b) System.out.println("Buzz");\n            else System.out.println(i);\n        }\n    }\n}`
    },
    explanation:
      "Illustre les boucles et conditions imbriquées ainsi que l'ordre d'évaluation des cas.",
  },
  {
    id: "two-sum",
    title: "Deux Sommes (Two Sum)",
    level: "intermediate",
    concept: "collections",
    description:
      "Trouver deux indices i, j tels que nums[i] + nums[j] = target.",
    input_format: "Tableau d'entiers et une cible.",
    output_format: "Indices i et j.",
    examples: [
      { input: "[2,7,11,15], target=9", output: "0 1" }
    ],
    hints: [
      "Utilise une HashMap pour stocker les compléments.",
      "Parcours le tableau une seule fois."
    ],
    solution: {
      code: `import java.util.*;\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer,Integer> map = new HashMap<>();\n        for(int i=0;i<nums.length;i++){\n            int need = target - nums[i];\n            if(map.containsKey(need)) return new int[]{map.get(need), i};\n            map.put(nums[i], i);\n        }\n        return new int[0];\n    }\n}`
    },
    explanation:
      "Montre l'utilisation efficace des structures de données (HashMap) pour réduire la complexité à O(n).",
  },
  {
    id: "stream-avg",
    title: "Moyenne avec Streams",
    level: "advanced",
    concept: "streams",
    description:
      "À partir d'une liste d'entiers, calcule la moyenne avec l'API Streams.",
    input_format: "Liste d'entiers.",
    output_format: "Un double représentant la moyenne.",
    examples: [
      { input: "[1,2,3]", output: "2.0" }
    ],
    hints: [
      "Utilise mapToInt puis average().",
      "Gère le cas de liste vide avec orElse()."
    ],
    solution: {
      code: `import java.util.*;\nclass Solution {\n    public static double avg(List<Integer> list){\n        return list.stream().mapToInt(i->i).average().orElse(0);\n    }\n}`
    },
    explanation:
      "Illustration pratique de l'API Streams et des opérations terminales.",
  },
  {
    id: "thread-safe-counter",
    title: "Compteur Thread-Safe",
    level: "master",
    concept: "threads",
    description:
      "Implémente un compteur thread-safe avec synchronized ou AtomicInteger.",
    input_format: "Opérations d'incrément concurrentes.",
    output_format: "Valeur finale correcte.",
    examples: [
      { input: "1000 increments from 10 threads", output: "10000" }
    ],
    hints: [
      "Compare synchronized vs AtomicInteger.",
      "Attention aux conditions de concurrence."
    ],
    solution: {
      code: `import java.util.concurrent.atomic.AtomicInteger;\nclass Counter {\n    private final AtomicInteger value = new AtomicInteger(0);\n    public void inc(){ value.incrementAndGet(); }\n    public int get(){ return value.get(); }\n}`
    },
    explanation:
      "Aborde la sécurité des threads et les classes utilitaires du package java.util.concurrent.",
  },
  {
    id: "min-window-substring",
    title: "Sous-chaîne minimale",
    level: "legendary",
    concept: "strings",
    description:
      "Trouve la plus petite sous-chaîne de s contenant tous les caractères de t.",
    input_format: "Deux chaînes s et t.",
    output_format: "Sous-chaîne minimale.",
    examples: [
      { input: "s=ADOBECODEBANC, t=ABC", output: "BANC" }
    ],
    hints: [
      "Technique sliding window.",
      "HashMap de fréquences."
    ],
    solution: {
      code: `import java.util.*;\nclass Solution {\n    public String minWindow(String s, String t) {\n        if(t.length()>s.length()) return "";\n        Map<Character,Integer> need = new HashMap<>();\n        for(char c: t.toCharArray()) need.put(c, need.getOrDefault(c,0)+1);\n        int have=0, required=need.size(), l=0, minLen=Integer.MAX_VALUE, start=0;\n        Map<Character,Integer> window = new HashMap<>();\n        for(int r=0;r<s.length();r++){\n            char c=s.charAt(r);\n            window.put(c, window.getOrDefault(c,0)+1);\n            if(need.containsKey(c) && window.get(c).intValue()==need.get(c).intValue()) have++;\n            while(have==required){\n                if(r-l+1 < minLen){ minLen=r-l+1; start=l; }\n                char left=s.charAt(l++);\n                window.put(left, window.get(left)-1);\n                if(need.containsKey(left) && window.get(left) < need.get(left)) have--;\n            }\n        }\n        return minLen==Integer.MAX_VALUE? "" : s.substring(start, start+minLen);\n    }\n}`
    },
    explanation:
      "Met en oeuvre la fenêtre glissante et l'invariant de couverture. Niveau algorithmique élevé.",
  },
];
