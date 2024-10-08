/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var je, val,
			script = doc.createElement( "script" );

		script.texte = code;
		si (nœud) {
			pour ( i dans savedScriptAttributes ) {

				// Prise en charge : Firefox 64+, Edge 18+
				// Certains navigateurs ne prennent pas en charge la propriété « nonce » sur les scripts.
				// D'un autre côté, le simple fait d'utiliser `getAttribute` n'est pas suffisant car
				// l'attribut `nonce` est réinitialisé sur une chaîne vide chaque fois qu'il
				// devient connecté au contexte de navigation.
				// Voir https://github.com/whatwg/html/issues/2369
				// Voir https://html.spec.whatwg.org/#nonce-attributes
				// La vérification `node.getAttribute` a été ajoutée pour des raisons de
				// `jQuery.globalEval` pour qu'il puisse simuler un nœud contenant un nonce
				// via un objet.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				si ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


fonction toType( obj ) {
	si ( obj == nul ) {
		retourner obj + "";
	}

	// Support : Android <= 2.3 uniquement (RegExp fonctionnelle)
	retourner typeof obj === "objet" || typeof obj === "fonction" ?
		class2type[ toString.call( obj ) ] || "objet" :
		type d'objet;
}
/* Symbole global */
// Définir ce global dans .eslintrc.json créerait un danger d'utilisation du global
// non protégé à un autre endroit, il semble plus sûr de définir global uniquement pour ce module



var version = "3.7.1",

	rhtmlSuffixe = /HTML$/i,

	// Définir une copie locale de jQuery
	jQuery = fonction( sélecteur, contexte ) {

		// L'objet jQuery n'est en fait que le constructeur d'initialisation 'enhanced'
		// Nécessite init si jQuery est appelé (autorise simplement l'émission d'une erreur si elle n'est pas incluse)
		renvoyer le nouveau jQuery.fn.init( sélecteur, contexte );
	};

jQuery.fn = jQuery.prototype = {

	// La version actuelle de jQuery utilisée
	jquery:version,

	constructeur : jQuery,

	// La longueur par défaut d'un objet jQuery est 0
	longueur: 0,

	toArray : fonction() {
		retourner slice.call( ceci );
	},

	// Obtenir le N-ième élément dans l'ensemble d'éléments correspondants OU
	// Obtenir l'ensemble des éléments correspondants sous forme de tableau propre
	obtenir : fonction( num ) {

		// Renvoie tous les éléments d'un tableau propre
		si ( num == nul ) {
			retourner slice.call( ceci );
		}

		// Renvoie uniquement un élément de l'ensemble
		retourner num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Prenez un tableau d'éléments et poussez-le sur la pile
	// (retournant le nouvel ensemble d'éléments correspondants)
	pushStack : fonction( éléments ) {

		// Créer un nouvel ensemble d'éléments correspondants jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Ajouter l'ancien objet sur la pile (en tant que référence)
		ret.prevObject = ceci;

		// Renvoie l'ensemble d'éléments nouvellement formé
		retour ret;
	},

	// Exécuter un rappel pour chaque élément de l'ensemble correspondant.
	chacun : fonction( rappel ) {
		retourner jQuery.each( ceci, rappel );
	},

	carte : fonction( rappel ) {
		renvoie ceci.pushStack( jQuery.map( ceci, fonction( elem, i ) {
			renvoyer callback.call( elem, i, elem );
		} ) );
	},

	tranche : fonction() {
		renvoyer ceci.pushStack( slice.apply( ceci, arguments ) );
	},

	premier : fonction() {
		renvoie ceci.eq( 0 );
	},

	dernier : fonction() {
		renvoie ceci.eq( -1 );
	},

	pair : fonction() {
		renvoie ceci.pushStack( jQuery.grep( ceci, fonction( _elem, i ) {
			retour ( i + 1 ) % 2;
		} ) );
	},

	impair : fonction() {
		renvoie ceci.pushStack( jQuery.grep( ceci, fonction( _elem, i ) {
			renvoie i % 2;
		} ) );
	},

	équation : fonction( i ) {
		var len = cette.longueur,
			j = +i + ( i < 0 ? longueur : 0 );
		renvoie this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fin : fonction() {
		renvoyer this.prevObject || this.constructor();
	},

	// Pour usage interne uniquement.
	// Se comporte comme une méthode de tableau, pas comme une méthode jQuery.
	pousser: pousser,
	trier : arr.sort,
	épissure : arr.épissure
};

jQuery.extend = jQuery.fn.extend = fonction() {
	var options, nom, src, copie, copyIsArray, clone,
		cible = arguments[ 0 ] || {},
		je = 1,
		longueur = arguments.longueur,
		profond = faux;

	// Gérer une situation de copie profonde
	si ( typeof cible === "booléen" ) {
		profond = cible;

		// Ignorer le booléen et la cible
		cible = arguments[ i ] || {};
		je++;
	}

	// Gérer le cas où la cible est une chaîne ou autre (possible en copie profonde)
	si ( typeof cible !== "objet" && !isFunction( cible ) ) {
		cible = {};
	}

	// Étendez jQuery lui-même si un seul argument est passé
	si ( i === longueur ) {
		cible = ceci;
		je--;
	}

	pour ( ; i < longueur; i++ ) {

		// Traiter uniquement les valeurs non nulles/non définies
		si ( ( options = arguments[ i ] ) != null ) {

			// Étendre l'objet de base
			pour ( nom dans les options ) {
				copie = options[ nom ];

				// Empêcher la pollution d'Object.prototype
				// Empêcher la boucle sans fin
				si ( nom === "__proto__" || cible === copie ) {
					continuer;
				}

				// Récursivité si nous fusionnons des objets simples ou des tableaux
				si ( profond && copie && ( jQuery.isPlainObject( copie ) ||
					( copyIsArray = Array.isArray( copie ) ) ) ) {
					src = cible[ nom ];

					// Assurez-vous que le type de la valeur source est correct
					si ( copyIsArray && ! Array.isArray( src ) ) {
						clone = [];
					} sinon si ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} autre {
						clone = src;
					}
					copyIsArray = faux;

					// Ne déplacez jamais les objets originaux, clonez-les
					target[ nom ] = jQuery.extend( deep, clone, copy );

				// Ne pas introduire de valeurs indéfinies
				} else if ( copie !== indéfini ) {
					cible[ nom ] = copie;
				}
			}
		}
	}

	// Renvoie l'objet modifié
	cible de retour;
};

jQuery.extend( {

	// Unique pour chaque copie de jQuery sur la page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Supposons que jQuery est prêt sans le module prêt
	estPrêt : vrai,

	erreur : fonction( msg ) {
		lancer une nouvelle erreur( msg );
	},

	noop : fonction() {},

	isPlainObject : fonction( obj ) {
		var proto, Ctor;

		// Détecter les négatifs évidents
		// Utilisez toString au lieu de jQuery.type pour récupérer les objets hôtes
		si ( !obj || toString.call( obj ) !== "[objet Objet]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Parcourir le tableau en enregistrant uniquement les éléments
		// qui passe la fonction de validation
		pour ( ; i < longueur; i++ ) {
			callbackInverse = !callback( éléments[ i ], i );
			si ( callbackInverse !== callbackExpect ) {
				allumettes.push( elems[ i ] );
			}
		}

		matchs retour;
	},

	// arg est destiné à un usage interne uniquement
	carte : fonction( éléments, rappel, arg ) {
		var longueur, valeur,
			je = 0,
			ret = [];

		// Parcourez le tableau, en traduisant chacun des éléments en leurs nouvelles valeurs
		si ( isArrayLike( éléments ) ) {
			longueur = elems.length;
			pour ( ; i < longueur; i++ ) {
				valeur = rappel( elems[ i ], i, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}

		// Parcourez chaque clé de l'objet,
		} autre {
			pour ( i dans elems ) {
				valeur = rappel( elems[ i ], i, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}
		}

		// Aplatir tous les tableaux imbriqués
		retour à plat( ret );
	},

	// Un compteur GUID global pour les objets
	guide: 1,

	// jQuery.support n'est pas utilisé dans Core mais d'autres projets attachent leur
	// des propriétés qui lui sont associées, il doit donc exister.
	soutien: soutien
} );

si ( typeof Symbole === "fonction" ) {
	jQuery.fn[ Symbole.iterator ] = arr[ Symbole.iterator ];
}

// Remplir la carte class2type
jQuery.each( "Booléen Nombre Chaîne Fonction Tableau Date RegExp Objet Erreur Symbole".split( " " ),
	fonction( _i, nom ) {
		class2type[ "[objet " + nom + "]" ] = nom.toLowerCase();
	} );

fonction isArrayLike( obj ) {

	// Support : iOS 8.2 réel uniquement (non reproductible dans le simulateur)
	// contrôle `in` utilisé pour éviter les erreurs JIT (gh-2145)
	// hasOwn n'est pas utilisé ici en raison de faux négatifs
	// concernant la longueur de la liste de nœuds dans IE
	var longueur = !!obj && "longueur" dans obj && obj.length,
		type = toType( obj );

	si ( estFunction( obj ) || estWindow( obj ) ) {
		retourner faux;
	}

	type de retour === "tableau" || longueur === 0 ||
		typeof length === "nombre" && longueur > 0 && ( longueur - 1 ) dans obj;
}


fonction nodeName( élément, nom ) {

	renvoie elem.nodeName && elem.nodeName.toLowerCase() === nom.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var espace blanc = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = nouvelle RegExp(
	"^" + espace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espace + "+$",
	"g"
);




// Remarque : un élément ne se contient pas lui-même
jQuery.contains = fonction( a, b ) {
	var bup = b && b.parentNode;

	renvoyer un === bup || !!( bup && bup.nodeType === 1 && (

		// Prise en charge : IE 9 - 11+
		// IE n'a pas de « contains » sur SVG.
		a.contient ?
			a.contient( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Sérialisation de chaîne/identifiant CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

fonction fcssescape( ch, asCodePoint ) {
	si ( asCodePoint ) {

		// U+0000 NULL devient U+FFFD CARACTÈRE DE REMPLACEMENT
		si ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( sélecteur ) && testContext( context.parentNode ) ||
						contexte;

					// Nous pouvons utiliser :scope au lieu du hack ID si le navigateur
					// le prend en charge et si nous ne modifions pas le contexte.
					// Prise en charge : IE 11+, Edge 17 - 18+
					// IE/Edge génère parfois une erreur « Autorisation refusée » lorsque
					// comparaison stricte de deux documents ; les comparaisons superficielles fonctionnent.
					// eslint-désactiver-la-ligne-suivante eqeqeq
					si ( newContext != contexte || !support.scope ) {

						// Capturez l'ID de contexte, en le définissant au préalable si nécessaire
						si ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} autre {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Préfixer chaque sélecteur dans la liste
					groupes = tokenize( sélecteur );
					i = groupes.length;
					tandis que ( je-- ) {
						groupes[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groupes[ i ] );
					}
					newSelector = groupes.join( "," );
				}

				essayer {
					push.apply( résultats,
						newContext.querySelectorAll( newSelector )
					);
					renvoyer les résultats ;
				} catch ( qsaError ) {
					nonnativeSelectorCache( sélecteur, vrai );
				} enfin {
					si ( nid === expando ) {
						contexte.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Tous les autres
	retourner select( selector.replace( rtrimCSS, "$1" ), contexte, résultats, graine );
}

/**
 * Créer des caches clé-valeur de taille limitée
 * @returns {function(string, object)} Renvoie les données de l'objet après les avoir stockées sur lui-même avec
 * nom de la propriété la chaîne (suffixée par un espace) et (si le cache est plus grand que Expr.cacheLength)
 * suppression de l'entrée la plus ancienne
 */
fonction createCache() {
	var clés = [];

	fonction cache( clé, valeur ) {

		// Utilisez (touche + " ") pour éviter toute collision avec les propriétés natives du prototype
		// (voir https://github.com/jquery/sizzle/issues/157)
		si ( touches.push( touche + " " ) > Expr.cacheLength ) {

			// Ne conserver que les entrées les plus récentes
			supprimer le cache[ touches.shift() ];
		}
		retour ( cache[ clé + " " ] = valeur );
	}
	retourner le cache;
}

/**
 * Marquer une fonction pour une utilisation spéciale par le module de sélection jQuery
 * @param {Function} fn La fonction à marquer
 */
fonction markFunction( fn ) {
	fn[ expando ] = vrai;
	retourner fn;
}

/**
 * Prise en charge des tests à l'aide d'un élément
 * @param {Function} fn a transmis l'élément créé et renvoie un résultat booléen
 */
fonction assert( fn ) {
	var el = document.createElement( "fieldset" );

	essayer {
		retour !!fn( el );
	} attraper ( e ) {
		retourner faux;
	} enfin {

		// Supprimer de son parent par défaut
		si ( el.parentNode ) {
			el.parentNode.removeChild( el);
		}

		// libérer la mémoire dans IE
		le = nul;
	}
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les types d'entrée
 * @param {Chaîne} type
 */
fonction createInputPseudo( type ) {
	fonction de retour( elem ) {
		renvoie nodeName( elem, "entrée" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, nom.toLowerCase() ) ?
			fn( élément, nom, !documentIsHTML ) :
			indéfini;

	si ( val !== indéfini ) {
		retourner val;
	}

	retourner elem.getAttribute( nom );
};

trouver.erreur = fonction( msg ) {
	throw new Error( "Erreur de syntaxe, expression non reconnue : " + msg );
};

/**
 * Tri des documents et suppression des doublons
 * @param {ArrayLike} résultats
 */
jQuery.uniqueSort = function( résultats ) {
	var élément,
		doublons = [],
		j = 0,
		je = 0;

	// À moins que nous *sachions* que nous pouvons détecter les doublons, supposer leur présence
	//
	// Prise en charge : Android <= 4.0+
	// Les tests de détection des doublons sont imprévisibles, alors supposons plutôt que nous ne pouvons pas
	// dépend de la détection des doublons dans tous les navigateurs sans tri stable.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( résultats, 0 );
	sort.call( résultats, sortOrder );

	si ( a un doublon ) {
		tandis que ( ( elem = résultats[ i++ ] ) ) {
			si ( elem === résultats[ i ] ) {
				j = doublons.push( i );
			}
		}
		tandis que ( j-- ) {
			splice.call( résultats, doublons[ j ], 1 );
		}
	}

	// Effacer l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	renvoyer les résultats ;
};

jQuery.fn.uniqueSort = fonction() {
	renvoyer ceci.pushStack( jQuery.uniqueSort( slice.apply( ceci ) ) );
};

Expr = jQuery.expr = {

	// Peut être ajusté par l'utilisateur
	Longueur du cache : 50,

	createPseudo: fonction de marquage,

	correspondance : matchExpr,

	attrHandle : {},

	trouver: {},

	relatif: {
		">": { dir: "parentNode", premier: vrai },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", premier: vrai },
		"~": { dir: "précédentSibling" }
	},

	préfiltre : {
		ATTR : fonction( correspondance ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Déplacez la valeur donnée vers match[3], qu'elle soit entre guillemets ou non
			correspondance[ 3 ] = ( correspondance[ 3 ] || correspondance[ 4 ] || correspondance[ 5 ] || "" )
				.remplacer(runescape, funescape );

			si ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			renvoie match.slice( 0, 4 );
		},

		ENFANT : fonction( match ) {

			/* correspond à matchExpr["CHILD"]
				1 type (seulement|ntième|...)
				2 quoi (enfant|de-type)
				3 arguments (pair|impair|\d*|\d*n([+-]\d+)?|...)
				4 xn-composante de l'argument xn+y ([+-]?\d*n|)
				5 signe de la composante xn
				6 x de la composante xn
				7 signe de la composante y
				8 y de la composante y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			si ( match[ 1 ].slice( 0, 3 ) === "ntième" ) {

				// nth-* nécessite un argument
				si ( !match[ 3 ] ) {
					trouver.erreur( match[ 0 ] );
				}

				// paramètres numériques x et y pour Expr.filter.CHILD
				// rappelez-vous que false/true sont respectivement convertis en 0/1
				correspondance[ 4 ] = +( correspondance[ 4 ] ?
					correspondance[ 5 ] + ( correspondance[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "pair" || match[ 3 ] === "impair" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		bouton : fonction( élément ) {
			renvoyer nodeName( elem, "input" ) && elem.type === "bouton" ||
				nodeName( élément, "bouton" );
		},

		texte : fonction( elem ) {
			var attr;
			renvoie nodeName( elem, "input" ) && elem.type === "texte" &&

				// Prise en charge : IE < 10 uniquement
				// De nouvelles valeurs d'attribut HTML5 (par exemple, « recherche ») apparaissent
				// avec elem.type === "texte"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "texte" );
		},

		// Position dans la collection
		premier : createPositionalPseudo( function() {
			retour [ 0 ];
		} ),

		dernier : createPositionalPseudo( fonction( _matchIndexes, longueur ) {
			retour [ longueur - 1 ];
		} ),

		eq : createPositionalPseudo( fonction( _matchIndexes, longueur, argument ) {
			retour [ argument < 0 ? argument + longueur : argument ];
		} ),

		pair : createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			pour ( ; i < longueur; i += 2 ) {
				matchIndexes.push( i );
			}
			renvoyer matchIndexes;
		} ),

		impair : createPositionalPseudo( fonction( matchIndexes, longueur ) {
			var i = 1;
			pour ( ; i < longueur; i += 2 ) {
				matchIndexes.push( i );
			}
			renvoyer matchIndexes;
		} ),

		lt : createPositionalPseudo( fonction( matchIndexes, longueur, argument ) {
			var je;

			si ( argument < 0 ) {
				i = argument + longueur ;
			} sinon si ( argument > longueur ) {
				i = longueur;
			} autre {
				i = argument;
			}

			pour ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			renvoyer matchIndexes;
		} ),

		gt: createPositionalPseudo( fonction( matchIndexes, longueur, argument ) {
			var i = argument < 0 ? argument + longueur : argument;
			pour ( ; ++i < longueur; ) {
				matchIndexes.push( i );
			}
			renvoyer matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Ajouter des pseudos de type bouton/entrée
pour ( i dans { radio : vrai, case à cocher : vrai, fichier : vrai, mot de passe : vrai, image : vrai } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
pour ( i dans { soumettre : vrai, réinitialiser : vrai } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API simple pour créer de nouveaux setFilters
fonction setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = nouveau setFilters();

fonction tokenize( sélecteur, parseOnly ) {
	var matched, match, jetons, type,
		jusqu'à présent, groupes, préfiltres,
		mis en cache = tokenCache[ sélecteur + " " ];

	si ( mis en cache ) {
		renvoyer parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = sélecteur;
	groupes = [];
	préFiltres = Expr.préFiltre;

	tandis que ( jusqu'ici ) {

		// Virgule et première exécution
		si ( !correspond || (match = rcomma.exec( soFar ) ) ) {
			si (correspondance) {

				// Ne pas utiliser les virgules de fin comme valides
				jusqu'ici = jusqu'ici.tranche( match[ 0 ].length ) || jusqu'ici;
			}
			groupes.push( ( tokens = [] ) );
		}

		correspondant = faux;

		// Combinateurs
		si ( ( match = rleadingCombinator.exec( jusqu'à présent ) ) ) {
			correspondant = match.shift();
			jetons.push( {
				valeur : appariée,

				// Convertir les combinateurs descendants en espace
				type : match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( longueur.correspondante );
		}

		// Filtres
		pour (tapez Expr.filter) {
			si ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			si ( !filtre || filtre( elem, contexte, xml ) ) {
				nouveauUnmatched.push( elem );
				si ( mappé ) {
					carte.push( i );
				}
			}
		}
	}

	retourner newUnmatched;
}

fonction setMatcher( préfiltre, sélecteur, matcher, postFilter, postFinder, postSelector ) {
	si ( postFilter && ! postFilter [ développer ] ) {
		postFilter = setMatcher( postFilter );
	}
	si ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	renvoie markFunction( function( seed, résultats, contexte, xml ) {
		var temp, je, elem, matcherOut,
			préMap = [],
			postMap = [],
			préexistant = résultats.longueur,

			// Obtenir les éléments initiaux à partir de la graine ou du contexte
			éléments = graine ||
				multipleContexts( sélecteur || "*",
					context.nodeType ? [ contexte ] : contexte, [] ),

			// Préfiltre pour obtenir l'entrée du matcher, en préservant une carte pour la synchronisation des résultats de départ
			matcherIn = préfiltre && ( graine || ! sélecteur ) ?
				condenser( éléments, preMap, preFilter, contexte, xml ) :
				éléments;

		si ( matcher ) {

			// Si nous avons un postFinder, ou une graine filtrée, ou un postFilter sans graine
			// ou résultats préexistants,
			matcherOut = postFinder || ( seed ? preFilter : préexistant || postFilter ) ?

				// ...un traitement intermédiaire est nécessaire
				[] :

				// ...sinon utiliser les résultats directement
				résultats;

			// Rechercher les correspondances principales
			matcher( matcherIn, matcherOut, contexte, xml );
		} autre {
			matcherOut = matcherIn;
		}

		// Appliquer postFilter
		si ( postFilter ) {
			temp = condenser( matcherOut, postMap );
			postFilter( temp, [], contexte, xml );

			// Annulez la correspondance des éléments défaillants en les replaçant dans matcherIn
			i = temp.longueur;
			tandis que ( je-- ) {
				si ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si ( graine ) {
			si ( postFinder || préFiltre ) {
				si ( postFinder ) {

					// Obtenez le matcherOut final en condensant cet intermédiaire dans les contextes postFinder
					température = [];
					i = matcherOut.longueur;
					tandis que ( je-- ) {
						si ( ( elem = matcherOut[ i ] ) ) {

							// Restaurer matcherIn puisque elem n'est pas encore une correspondance finale
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Déplacer les éléments correspondants de la graine vers les résultats pour les maintenir synchronisés
				i = matcherOut.longueur;
				tandis que ( je-- ) {
					si ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						graine[ temp ] = !( résultats[ temp ] = elem );
					}
				}
			}

		// Ajouter des éléments aux résultats, via postFinder s'il est défini
		} autre {
			matcherOut = condenser(
				matcherOut === résultats ?
					matcherOut.splice( préexistant, matcherOut.length ) :
					matcherOut
			);
			si ( postFinder ) {
				postFinder( null, résultats, matcherOut, xml );
			} autre {
				push.apply( résultats, matcherOut );
			}
		}
	} );
}

fonction matcherFromTokens( jetons ) {
	var checkContext, matcher, j,
		len = jetons.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// Le matcher fondamental garantit que les éléments sont accessibles à partir des contextes de niveau supérieur
		matchContext = addCombinator( fonction( élément ) {
			renvoyer l'élément === checkContext;
		}, impliciteRelative, vrai ),
		matchAnyContext = addCombinator( fonction( élément ) {
			renvoie indexOf.call( checkContext, elem ) > -1;
		}, impliciteRelative, vrai ),
		matchers = [ fonction( élément, contexte, xml ) {

			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur « Autorisation refusée » lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-désactiver-la-ligne-suivante eqeqeq
			var ret = ( !leadingRelative && ( xml || contexte != externalmostContext ) ) || (
				( checkContext = contexte ).nodeType ?
					matchContext( élément, contexte, xml ) :
					matchAnyContext( élément, contexte, xml ) );

			// Évitez de vous accrocher à l'élément
			// (voir https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			retour ret;
		} ];

	pour ( ; i < len; i++ ) {
		si ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} autre {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Renvoie un message spécial lorsque l'on voit un matcher positionnel
			si ( matcher [ expando ] ) {

				// Rechercher le prochain opérateur relatif (le cas échéant) pour une gestion appropriée
				j = ++i;
				pour ( ; j < len; j++ ) {
					si (Expr.relative[jetons[j].type] ) {
						casser;
					}
				}
				retourner setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// Si le jeton précédent était un combinateur descendant, insérez un élément implicite `*`
						jetons.slice( 0, i - 1 )
							.concat( { valeur : jetons[ i - 2 ].type === " " ? "*" : "" } )
					).remplacer( rtrimCSS, "$1" ),
					allumeur,
					je < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( jetons = jetons.slice( j ) ) ),
					j < len && toSelector( jetons )
				);
			}
			correspondants.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

fonction matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, externalmost ) {
			var elem, j, matcher,
				nombre correspondant = 0,
				i = "0",
				non apparié = graine && [],
				setMatched = [],
				contextBackup = contexte le plus externe,

				// Nous devons toujours avoir soit des éléments de départ, soit un contexte le plus externe
				elems = seed || byElement && Expr.find.TAG( "*", le plus à l'extérieur),

				// Utiliser des répertoires entiers ssi c'est le matcher le plus externe
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = éléments.longueur;

			si ( le plus à l'extérieur ) {

				// Prise en charge : IE 11+, Edge 17 - 18+
				// IE/Edge génère parfois une erreur « Autorisation refusée » lors d'une comparaison stricte
				// deux documents ; les comparaisons superficielles fonctionnent.
				// eslint-désactiver-la-ligne-suivante eqeqeq
				externalmostContext = contexte == document || contexte || le plus externe ;
			}

			// Ajouter des éléments en passant des elementMatchers directement aux résultats
			// Prise en charge : iOS <=7 - 9 uniquement
			// Tolérer les propriétés NodeList (IE : « longueur » ; Safari : < numéro >) correspondantes
			// éléments par identifiant. (voir trac-14142)
			pour ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				si ( parElement && elem ) {
					j = 0;

					// Prise en charge : IE 11+, Edge 17 - 18+
					// IE/Edge génère parfois une erreur « Autorisation refusée » lors d'une comparaison stricte
					// deux documents ; les comparaisons superficielles fonctionnent.
					// eslint-désactiver-la-ligne-suivante eqeqeq
					si ( !context && elem.ownerDocument != document ) {
						setDocument( élément );
						xml = !documentIsHTML;
					}
					tandis que ( ( matcher = elementMatchers[ j++ ] ) ) {
						si ( matcher ( elem, contexte || document, xml ) ) {
							push.call( résultats, elem );
							casser;
						}
					}
					si ( le plus à l'extérieur ) {
						dirruns = dirrunsUnique;
					}
				}

				// Suivre les éléments sans correspondance pour les filtres définis
				si ( par Set ) {

					// Ils auront parcouru tous les matchers possibles
					si ( ( elem = !matcher && elem ) ) {
						nombre correspondant--;
					}

					// Allonger le tableau pour chaque élément, correspondant ou non
					si ( graine ) {
						push sans correspondance( elem );
					}
				}
			}

			// `i` est maintenant le nombre d'éléments visités ci-dessus, et l'ajoute à `matchedCount`
			// rend ce dernier non négatif.
			nombre correspondant += i;

			// Appliquer des filtres d'ensemble aux éléments sans correspondance
			// REMARQUE : ceci peut être ignoré s'il n'y a pas d'éléments non appariés (c'est-à-dire, `matchedCount`
			// est égal à `i`), à moins que nous n'ayons visité aucun élément dans la boucle ci-dessus car nous avons
			// pas de correspondance d'éléments et pas de graine.
			// L'incrémentation d'une chaîne initialement "0" `i` permet à `i` de rester une chaîne uniquement dans ce cas
			// cas, qui entraînera un "00" `matchedCount` qui diffère de `i` mais est également
			// numériquement zéro.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				tandis que ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( non apparié, setMatched, contexte, xml );
				}

				si ( graine ) {

					// Réintégrer les correspondances d'éléments pour éliminer le besoin de tri
					si ( nombre correspondant > 0 ) {
						tandis que ( je-- ) {
							si ( !( sans correspondance [ i ] || setMatched [ i ] ) ) {
								setMatched[ i ] = pop.call( résultats );
							}
						}
					}

					// Ignorer les valeurs d'espace réservé d'index pour obtenir uniquement les correspondances réelles
					setMatched = condenser( setMatched );
				}

				// Ajouter des correspondances aux résultats
				push.apply( résultats, setMatched );

				// Les correspondances sans graines qui succèdent à plusieurs correspondances réussies stipulent le tri
				si (le plus à l'extérieur && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					jQuery.uniqueSort( résultats );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || contexte
				) ) ) {

					// Si la graine est vide ou s'il ne reste aucun jeton, nous pouvons revenir plus tôt
					jetons.splice( i, 1 );
					sélecteur = seed.length && toSelector( jetons );
					si ( !sélecteur ) {
						push.apply( résultats, seed );
						renvoyer les résultats ;
					}

					casser;
				}
			}
		}
	}

	// Compiler et exécuter une fonction de filtrage si aucune n'est fournie
	// Fournir `match` pour éviter la retokenisation si nous avons modifié le sélecteur ci-dessus
	( compilé || compiler( sélecteur, correspondance ) )(
		graine,
		contexte,
		!documentEstHTML,
		résultats,
		!context || rsibling.test( sélecteur ) && testContext( context.parentNode ) || contexte
	);
	renvoyer les résultats ;
}

// Missions ponctuelles

// Prise en charge : Android <= 4.0 - 4.1+
// Stabilité du tri
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialiser par rapport au document par défaut
définirDocument();

// Prise en charge : Android <= 4.0 - 4.1+
// Les nœuds détachés se suivent de manière déroutante *les uns les autres*
support.sortDetached = assert( fonction( el ) {

	// Doit renvoyer 1, mais renvoie 4 (suivant)
	renvoie el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = trouver;

// Obsolète
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Ceux-ci ont toujours été privés, mais ils étaient documentés dans le cadre de
// Sizzle, alors maintenons-les pour l'instant à des fins de compatibilité descendante.
find.compile = compiler;
trouver.select = sélectionner;
trouver.setDocument = setDocument;
trouver.tokenize = tokeniser;

trouver.escape = jQuery.escapeSelector;
trouver.getText = jQuery.text;
trouver.isXML = jQuery.isXMLDoc;
trouver.sélecteurs = jQuery.expr;
trouver.support = jQuery.support;
trouver.uniqueSort = jQuery.uniqueSort;

	/* eslint-activer */

} )();


var rép = fonction (elem, rép, jusqu'à) {
	var correspondant = [],
		tronquer = jusqu'à !== indéfini;

	tandis que ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		si ( elem.nodeType === 1 ) {
			si ( tronquer && jQuery( elem ).is( jusqu'à ) ) {
				casser;
			}
			correspondant.push( elem );
		}
	}
	retour correspondant;
};


var frères et sœurs = fonction( n, elem ) {
	var correspondant = [];

	pour ( ; n; n = n.nextSibling ) {
		si ( n.nodeType === 1 && n !== elem ) {
			correspondant.push( n );
		}
	}

	retour correspondant;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implémenter la même fonctionnalité pour le filtre et non
fonction winnow( éléments, qualificateur, non ) {
	si ( isFunction( qualificateur ) ) {
		renvoie jQuery.grep( éléments, fonction( elem, i ) {
			retour !!qualifier.call( elem, i, elem ) !== non;
		} );
	}

	// Élément unique
	si ( qualificatif.nodeType ) {
		renvoie jQuery.grep( éléments, fonction( elem ) {
			retour ( elem === qualificateur ) !== non ;
		} );
	}

	// Tableau d'éléments (jQuery, arguments, Array)
	si ( typeof qualificateur !== "chaîne" ) {
		renvoie jQuery.grep( éléments, fonction( elem ) {
			retour ( indexOf.call( qualifier, elem ) > -1 ) !== non;
		} );
	}

	// Filtré directement pour les sélecteurs simples et complexes
	retourner jQuery.filter( qualifier, éléments, pas );
}

jQuery.filter = fonction( expr, éléments, pas ) {
	var elem = elems[ 0 ];

	sinon ) {
		expr = ":pas(" + expr + ")";
	}

	si ( elems.length === 1 && elem.nodeType === 1 ) {
		renvoie jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	renvoie jQuery.find.matches( expr, jQuery.grep( éléments, fonction( elem ) {
		retourner elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	trouver : fonction( sélecteur ) {
		var i, ret,
			len = cette.longueur,
			soi = ceci;

		si ( typeof sélecteur !== "chaîne" ) {
			renvoie ceci.pushStack( jQuery( sélecteur ).filter( fonction() {
				pour ( i = 0; i < len; i++ ) {
					si ( jQuery.contains( self[ i ], ceci ) ) {
						renvoie vrai ;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		pour ( i = 0; i < len; i++ ) {
			jQuery.find( sélecteur, self[ i ], ret );
		}

		retourner len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtre : fonction( sélecteur ) {
		renvoyer ceci.pushStack( winnow( ceci, sélecteur || [], false ) );
	},
	non : fonction( sélecteur ) {
		renvoyer ceci.pushStack( winnow( ceci, sélecteur || [], true ) );
	},
	est : fonction( sélecteur ) {
		retour !!winnow(
			ce,

			// S'il s'agit d'un sélecteur positionnel/relatif, vérifiez l'appartenance à l'ensemble renvoyé
			// donc $("p:first").is("p:last") ne renverra pas vrai pour un document avec deux "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( sélecteur ) :
				sélecteur || [],
			FAUX
		).longueur;
	}
} );


// Initialiser un objet jQuery


// Une référence centrale à la racine jQuery(document)
var rootjQuery,

	// Une manière simple de vérifier les chaînes HTML
	// Priorisez #id sur <tag> pour éviter les XSS via location.hash (trac-9521)
	// Reconnaissance HTML stricte (trac-11290 : doit commencer par <)
	// Raccourci simple #id case pour la vitesse
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( sélecteur, contexte, racine ) {
		var correspondance, élément;

		// POIGNÉE : $(""), $(null), $(undefined), $(false)
		si ( !sélecteur ) {
			retourne ceci;
		}

		// La méthode init() accepte une autre racinejQuery
		// donc migrate peut prendre en charge jQuery.sub (gh-2101)
		racine = racine || rootjQuery;

		// Gérer les chaînes HTML
		si ( typeof sélecteur === "chaîne" ) {
			si ( sélecteur[ 0 ] === "<" &&
				sélecteur[ sélecteur.length - 1 ] === ">" &&
				sélecteur.length >= 3 ) {

				// Supposons que les chaînes qui commencent et se terminent par <> sont du HTML et ignorez la vérification de l'expression régulière
				match = [ null, sélecteur, null ];

			} autre {
				match = rquickExpr.exec( sélecteur );
			}

			// Faites correspondre le code HTML ou assurez-vous qu'aucun contexte n'est spécifié pour #id
			si ( match && ( match[ 1 ] || !context ) ) {

				// POIGNÉE : $(html) -> $(tableau)
				si ( match[ 1 ] ) {
					contexte = instance de contexte de jQuery ? contexte[ 0 ] : contexte;

					// L'option d'exécution de scripts est vraie pour la rétrocompatibilité
					// Laisser intentionnellement l'erreur être générée si parseHTML n'est pas présent
					jQuery.merge( ceci, jQuery.parseHTML(
						match[ 1 ],
						contexte && context.nodeType ? context.ownerDocument || contexte : document,
						vrai
					) );

					// POIGNÉE : $(html, accessoires)
					si ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( contexte ) ) {
						pour (correspondance dans le contexte) {

							// Les propriétés du contexte sont appelées comme des méthodes si possible
							si ( isFunction( ceci[ correspondance ] ) ) {
								ceci[ match ]( contexte[ match ] );

							// ...et sinon définis comme attributs
							} autre {
								this.attr( correspondance, contexte[ correspondance ] );
							}
						}
					}

					retourne ceci;

				// POIGNÉE : $(#id)
				} autre {
					elem = document.getElementById( match[ 2 ] );

					si ( élément ) {

						// Injecter l'élément directement dans l'objet jQuery
						ceci[ 0 ] = elem;
						cette.longueur = 1;
					}
					retourne ceci;
				}

			// POIGNÉE : $(expr, $(...))
			} sinon si ( !context || context.jquery ) {
				retour ( contexte || racine ).find( sélecteur );

			// POIGNÉE : $(expr, contexte)
			// (qui est simplement équivalent à : $(context).find(expr)
			} autre {
				renvoyer this.constructor( contexte ).find( sélecteur );
			}

		// POIGNÉE : $(DOMElement)
		} sinon si ( sélecteur.nodeType ) {
			ceci[ 0 ] = sélecteur;
			cette.longueur = 1;
			retourne ceci;

		// POIGNÉE : $(fonction)
		// Raccourci pour le document prêt
		} else if ( isFunction( sélecteur ) ) {
			retourner root.ready !== indéfini ?
				root.ready( sélecteur ) :

				// Exécuter immédiatement si ready n'est pas présent
				sélecteur( jQuery );
		}

		retourner jQuery.makeArray( sélecteur, ceci );
	};

// Donnez à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialiser la référence centrale
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Tous|Tous))/,

	// Méthodes garantissant la production d'un ensemble unique à partir d'un ensemble unique
	garantiUnique = {
		enfants : vrai,
		contenu : vrai,
		suivant : vrai,
		précédent : vrai
	};

jQuery.fn.extend( {
	a : fonction( cible ) {
		var cibles = jQuery( cible, ceci ),
			l = longueur des cibles ;

		renvoie ceci.filter( fonction() {
			var i = 0;
			pour ( ; i < l; i++ ) {
				si ( jQuery.contains( ceci, cibles[ i ] ) ) {
					renvoie vrai ;
				}
			}
		} );
	},

	le plus proche : fonction( sélecteurs, contexte ) {
		var cur,
			je = 0,
			l = cette.longueur,
			correspondant = [],
			cibles = typeof sélecteurs !== "string" && jQuery( sélecteurs );

		// Les sélecteurs de position ne correspondent jamais, car il n'y a pas de contexte de _sélection_
		si ( !rneedsContext.test( sélecteurs ) ) {
			pour ( ; i < l; i++ ) {
				pour ( cur = this[ i ]; cur && cur !== contexte; cur = cur.parentNode ) {

					// Toujours ignorer les fragments de document
					si ( cur.nodeType < 11 && ( cibles ?
						cibles.index( cur ) > -1 :

						// Ne pas transmettre de non-éléments à jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, sélecteurs ) ) ) {

						correspondant.push( cur );
						casser;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		si ( cette.longueur > 1 ) {

			// Supprimer les doublons
			si ( !garantieUnique[ nom ] ) {
				jQuery.uniqueSort(correspondant) ;
			}

			// Ordre inverse pour les parents* et les dérivés précédents
			si ( rparentsprev.test( nom ) ) {
				correspondant.reverse();
			}
		}

		renvoyer this.pushStack(correspondant) ;
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertir les options au format String en options au format Object
fonction createOptions( options ) {
	var objet = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], fonction( _, indicateur ) {
		objet[ drapeau ] = vrai;
	} );
	retourner l'objet;
}

/*
 * Créez une liste de rappel en utilisant les paramètres suivants :
 *
 * options : une liste facultative d'options séparées par des espaces qui modifieront la manière dont
 * la liste de rappel se comporte comme un objet d'option plus traditionnel
 *
 * Par défaut, une liste de rappel agira comme une liste de rappel d'événement et peut être
 * « viré » plusieurs fois.
 *
 * Options possibles :
 *
 * once : garantira que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * mémoire : gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après que la liste a été déclenchée immédiatement avec la dernière "mémorisation"
 * valeurs (comme un différé)
 *
 * unique : garantira qu'un rappel ne peut être ajouté qu'une seule fois (pas de doublon dans la liste)
 *
 * stopOnFalse : interrompre les appels lorsqu'un rappel renvoie false
 *
 */
jQuery.Callbacks = fonction( options ) {

	// Convertissez les options du format chaîne au format objet si nécessaire
	// (nous vérifions d'abord le cache)
	options = typeof options === "chaîne" ?
		createOptions(options) :
		jQuery.extend( {}, options );

	var // Indicateur pour savoir si la liste est en cours de déclenchement
		cuisson,

		// Dernière valeur de tir pour les listes non oubliables
		mémoire,

		// Drapeau pour savoir si la liste a déjà été déclenchée
		licencié,

		// Drapeau pour empêcher le déclenchement
		fermé,

		// Liste de rappel réelle
		liste = [],

		// File d'attente des données d'exécution pour les listes répétables
		file d'attente = [],

		// Index du rappel actuellement déclenché (modifié par ajout/suppression selon les besoins)
		indice de tir = -1,

		// Rappels de feu
		feu = fonction() {

			// Appliquer le tir unique
			verrouillé = verrouillé || options.once;

			// Exécuter les rappels pour toutes les exécutions en attente,
			// respect des remplacements de firingIndex et des modifications d'exécution
			tiré = tir = vrai;
			pour ( ; queue.length; firingIndex = -1 ) {
				mémoire = file.shift();
				tandis que ( ++firingIndex < liste.length ) {

					// Exécutez le rappel et vérifiez la terminaison anticipée
					si ( liste[ index de déclenchement ].apply( mémoire[ 0 ], mémoire[ 1 ] ) === faux &&
						options.stopOnFalse ) {

						// Aller à la fin et oublier les données pour que .add ne se relance pas
						firingIndex = liste.longueur;
						mémoire = faux;
					}
				}
			}

			// Oubliez les données si nous en avons fini avec elles
			si ( !options.mémoire ) {
				mémoire = faux;
			}

			tir = faux;

			// Nettoyez si nous avons fini de tirer pour de bon
			si (verrouillé) {

				// Gardez une liste vide si nous avons des données pour les futurs appels d'ajout
				si ( mémoire ) {
					liste = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Autres non-alorsables
		} autre {

			// Contrôlez les arguments de `resolve` en laissant Array#slice convertir le booléen `noValue` en entier :
			// * false: [ valeur ].slice( 0 ) => resolve( valeur )
			// * true: [ valeur ].slice( 1 ) => resolve()
			résoudre.apply( indéfini, [ valeur ].slice( noValue ) );
		}

	// Pour les promesses/A+, convertissez les exceptions en rejets
	// Étant donné que jQuery.when ne déballe pas les thenables, nous pouvons ignorer les vérifications supplémentaires apparaissant dans
	// Différé#puis pour supprimer conditionnellement le rejet.
	} catch ( valeur ) {

		// Prise en charge : Android 4.0 uniquement
		// Les fonctions en mode strict invoquées sans .call/.apply obtiennent le contexte de l'objet global
		rejeter.appliquer( indéfini, [ valeur ] );
	}
}

jQuery.extend( {

	Différé : fonction( func ) {
		var tuples = [

				// action, ajouter un écouteur, rappels,
				// ... .then gestionnaires, index d'argument, [état final]
				[ "notifier", "progrès", jQuery.Callbacks( "mémoire" ),
					jQuery.Callbacks( "mémoire" ), 2 ],
				[ "résoudre", "terminé", jQuery.Callbacks( "une fois la mémoire" ),
					jQuery.Callbacks( "une fois la mémoire" ), 0, "résolu" ],
				[ "rejeter", "échouer", jQuery.Callbacks( "une fois la mémoire" ),
					jQuery.Callbacks( "une fois la mémoire" ), 1, "rejeté" ]
			],
			état = "en attente",
			promesse = {
				état : fonction() {
					état de retour;
				},
				toujours : fonction() {
					différé.fait( arguments ).échec( arguments );
					retourne ceci;
				},
				"catch": fonction( fn ) {
					retourner la promesse.then( null, fn );
				},

				// Conserver le tube pour la rétrocompatibilité
				tuyau : fonction( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					renvoie jQuery.Deferred( fonction( newDefer ) {
						jQuery.each( tuples, fonction( _i, tuple ) {

							// Mapper les tuples (progress, done, fail) aux arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { lié à newDefer ou newDefer.notify })
							// deferred.done(function() { lié à newDefer ou newDefer.resolve })
							// deferred.fail(function() { lié à newDefer ou newDefer.reject })
							différé[ tuple[ 1 ] ]( fonction() {
								var renvoyé = fn && fn.apply( ceci, arguments );
								si (retourné && isFunction(retourné.promise) ) {
									promesse.retournée()
										.progress( nouveauDefer.notify )
										.done( nouveauDefer.resolve )
										.fail( newDefer.reject );
								} autre {
									newDefer[ tuple[ 0 ] + "Avec" ](
										ce,
										fn ? [ retourné ] : arguments
									);
								}
							} );
						} );
						fns = nul;
					} ).promesse();
				},
				alors : fonction( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					fonction resolve( profondeur, différé, gestionnaire, spécial ) {
						fonction de retour() {
							var cela = ceci,
								args = arguments,
								mightThrow = fonction() {
									var est revenu, alors ;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				différé[ tuple[ 0 ] + "Avec" ]( this === différé ? undefined : this, arguments );
				retourne ceci;
			};

			// différé.notifyWith = liste.fireWith
			// différé.résolutionAvec = liste.fireWith
			// différé.rejectWith = liste.fireWith
			différé[ tuple[ 0 ] + "Avec" ] = liste.fireWith;
		} );

		// Faire du différé une promesse
		promesse.promise( différé );

		// Appeler la fonction donnée le cas échéant
		si ( fonction ) {
			func.call( différé, différé );
		}

		// Tout est fait !
		retour différé;
	},

	// Aide différée
	quand : fonction( singleValue ) {
		var

			// nombre de subordonnés inachevés
			restant = arguments.length,

			// nombre d'arguments non traités
			i = restant,

			// données d'exécution subordonnées
			resolveContexts = Tableau( i ),
			resolveValues ​​= slice.call( arguments ),

			// le différé primaire
			primaire = jQuery.Deferred(),

			// usine de rappel subordonnée
			updateFunc = fonction( i ) {
				fonction de retour (valeur) {
					resolveContexts[ i ] = ceci;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : valeur ;
					si ( !( --restant ) ) {
						primary.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// Les arguments simples et vides sont adoptés comme Promise.resolve
		si (restant <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!restant );

			// Utilisez .then() pour déballer les thenables secondaires (cf. gh-3000)
			si (primary.state() === "en attente" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				retourner primaire.then();
			}
		}

		// Plusieurs arguments sont agrégés comme les éléments du tableau Promise.all
		tandis que ( je-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		retourner primary.promise();
	}
} );


// Ceux-ci indiquent généralement une erreur de programmation lors du développement,
// avertissez-les dès que possible plutôt que de les avaler par défaut.
var rerrorNames = /^(Eval|Interne|Plage|Référence|Syntaxe|Type|URI)Erreur$/;

// Si `jQuery.Deferred.getErrorHook` est défini, `asyncError` est une erreur
// capturé avant la barrière asynchrone pour obtenir la cause de l'erreur d'origine
// qui pourrait autrement être caché.
jQuery.Deferred.exceptionHook = fonction( erreur, asyncError ) {

	// Prise en charge : IE 8 – 9 uniquement
	// La console existe lorsque les outils de développement sont ouverts, ce qui peut se produire à tout moment
	si ( window.console && window.console.warn && erreur && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Exception différée : " + error.message,
			erreur.stack, asyncError );
	}
};




jQuery.readyException = fonction( erreur ) {
	fenêtre.setTimeout( fonction() {
		lancer une erreur;
	} );
};




// Le différé utilisé sur DOM prêt
var readyList = jQuery.Deferred();

jQuery.fn.ready = fonction( fn ) {

	liste prête
		.puis( fn )

		// Enveloppez jQuery.readyException dans une fonction afin que la recherche
		// se produit au moment de la gestion des erreurs au lieu du rappel
		// inscription.
		.catch( fonction( erreur ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
fonction fcamelCase( _all, lettre ) {
	retourner la lettre.toUpperCase();
}

// Convertir les tirets en camelCase ; utilisé par les modules CSS et Data
// Prise en charge : IE <=9 - 11, Edge 12 - 15
// Microsoft a oublié de modifier son préfixe de fournisseur (trac-9572)
fonction camelCase( chaîne ) {
	renvoyer la chaîne. replace( rmsPrefix, "ms-" ). replace( rdashAlpha, fcamelCase );
}
var acceptData = fonction( propriétaire ) {

	// Accepte uniquement :
	// - Noeud
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objet
	// - N'importe lequel
	renvoie propriétaire.nodeType === 1 || propriétaire.nodeType === 9 || !( + propriétaire.nodeType );
};




fonction Données() {
	ceci.expando = jQuery.expando + Data.uid++;
}

Données.uid = 1;

Données.prototype = {

	cache : fonction( propriétaire ) {

		// Vérifiez si l'objet propriétaire a déjà un cache
		var valeur = propriétaire[ this.expando ];

		// Sinon, créez-en un
		si ( !valeur ) {
			valeur = {};

			// Nous pouvons accepter des données pour les nœuds non-éléments dans les navigateurs modernes,
			// mais nous ne devrions pas, voir trac-8335.
			// Renvoie toujours un objet vide.
			si ( acceptData( propriétaire ) ) {

				// S'il s'agit d'un nœud peu susceptible d'être transformé en chaîne ou d'être bouclé
				// utiliser une affectation simple
				si ( propriétaire.nodeType ) {
					propriétaire[ this.expando ] = valeur;

				// Sinon, sécurisez-le dans une propriété non énumérable
				// configurable doit être vrai pour permettre à la propriété d'être
				// supprimé lorsque les données sont supprimées
				} autre {
					Objet.defineProperty( propriétaire, this.expando, {
						valeur : valeur,
						configurable : vrai
					} );
				}
			}
		}

		valeur de retour;
	},
	ensemble : fonction( propriétaire, données, valeur ) {
		var prop,
			cache = this.cache( propriétaire );

		// Handle : [ propriétaire, clé, valeur ] args
		// Toujours utiliser la clé camelCase (gh-2257)
		si ( typeof données === "chaîne" ) {
			cache[ camelCase( données ) ] = valeur;

		// Handle : [ propriétaire, { propriétés } ] args
		} autre {

			// Copiez les propriétés une par une dans l'objet cache
			pour (prop dans les données) {
				cache[ camelCase( prop ) ] = données[ prop ];
			}
		}
		retourner le cache;
	},
	obtenir : fonction( propriétaire, clé ) {
		touche de retour === indéfini ?
			this.cache( propriétaire ) :

			// Toujours utiliser la clé camelCase (gh-2257)
			propriétaire[ this.expando ] && propriétaire[ this.expando ][ camelCase( clé ) ];
	},
	accès : fonction( propriétaire, clé, valeur ) {

		// Dans les cas où :
		//
		// 1. Aucune clé n'a été spécifiée
		// 2. Une clé de chaîne a été spécifiée, mais aucune valeur n'a été fournie
		//
		// Prenez le chemin « lecture » ​​et laissez la méthode get déterminer
		// quelle valeur renvoyer, respectivement soit :
		//
		// 1. L'objet cache entier
		// 2. Les données stockées dans la clé
		//
		si ( clé === indéfini ||
				( ( clé && typeof clé === "chaîne" ) && valeur === indéfini ) ) {

			retourner this.get( propriétaire, clé );
		}

		// Lorsque la clé n'est pas une chaîne, ou à la fois une clé et une valeur
		// sont spécifiés, définis ou étendent (objets existants) avec :
		//
		// 1. Un objet de propriétés
		// 2. Une clé et une valeur
		//
		this.set( propriétaire, clé, valeur );

		// Étant donné que le chemin « set » peut avoir deux points d'entrée possibles
		// renvoie les données attendues en fonction du chemin emprunté[*]
		valeur de retour !== indéfini ? valeur : clé ;
	},
	supprimer : fonction( propriétaire, clé ) {
		je suis,
			cache = propriétaire[ ceci.expando ];

		si ( cache === indéfini ) {
			retour;
		}

		si ( clé !== indéfini ) {

			// Prise en charge d'un tableau ou d'une chaîne de clés séparée par des espaces
			si ( Array.isArray( clé ) ) {

				// Si la clé est un tableau de clés...
				// Nous définissons toujours les clés camelCase, alors supprimez-les.
				clé = clé.map( camelCase );
			} autre {
				clé = camelCase( clé );

				// Si une clé avec des espaces existe, utilisez-la.
				// Sinon, créez un tableau en faisant correspondre les espaces non blancs
				clé = clé dans le cache ?
					[ clé ] :
					( clé.match( rnothtmlwhite ) || [] );
			}

			i = clé.length;

			tandis que ( je-- ) {
				supprimer le cache[ clé[ i ] ];
			}
		}

		// Supprimez l'extenso s'il n'y a plus de données
		si ( clé === indéfini || jQuery.isEmptyObject( cache ) ) {

			// Prise en charge : Chrome <=35 - 45
			// Les performances de Webkit et Blink diminuent lors de la suppression de propriétés
			// à partir des nœuds DOM, donc définissez-les sur undefined à la place
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restreint)
			si ( propriétaire.nodeType ) {
				propriétaire[ this.expando ] = indéfini;
			} autre {
				supprimer le propriétaire [ this.expando ];
			}
		}
	},
	hasData : fonction( propriétaire ) {
		var cache = propriétaire[ ceci.expando ];
		renvoyer le cache !== indéfini && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = nouvelles données();

var dataUser = nouvelles données();



// Résumé de la mise en œuvre
//
// 1. Appliquer la surface de l'API et la compatibilité sémantique avec la branche 1.9.x
// 2. Améliorer la maintenabilité du module en réduisant le stockage
// chemins vers un seul mécanisme.
// 3. Utilisez le même mécanisme unique pour prendre en charge les données « privées » et « utilisateur ».
// 4. _Ne jamais_ exposer de données « privées » au code utilisateur (TODO : Supprimer _data, _removeData)
// 5. Évitez d'exposer les détails d'implémentation sur les objets utilisateur (par exemple, les propriétés expando)
// 6. Fournir un chemin clair pour la mise à niveau de l'implémentation vers WeakMap en 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

fonction getData( données ) {
	si ( données === "vrai" ) {
		renvoie vrai ;
	}

	si ( données === "faux" ) {
		retourner faux;
	}

	si ( données === "null" ) {
		retourner null;
	}

	// Convertir en nombre uniquement si cela ne modifie pas la chaîne
	si ( données === + données + "" ) {
		retour + données ;
	}

	si ( rbrace.test( données ) ) {
		renvoyer JSON.parse( données );
	}

	renvoyer des données ;
}

fonction dataAttr( élément, clé, données ) {
	nom de la variable;

	// Si rien n'a été trouvé en interne, essayez de récupérer tout
	// données de l'attribut HTML5 data-*
	si ( données === indéfini && elem.nodeType === 1 ) {
		nom = "données-" + clé.replace( rmultiDash, "-$&" ).toLowerCase();
		données = elem.getAttribute( nom );

		si ( typeof données === "chaîne" ) {
			essayer {
				données = getData( données );
			} attraper ( e ) {}

			// Assurez-vous que nous définissons les données afin qu'elles ne soient pas modifiées ultérieurement
			dataUser.set( élément, clé, données );
		} autre {
			données = indéfinies;
		}
	}
	renvoyer des données ;
}

jQuery.extend( {
	hasData : fonction( élément ) {
		retourner dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	données : fonction( élément, nom, données ) {
		renvoyer dataUser.access( elem, nom, données );
	},

	removeData : fonction( élément, nom ) {
		dataUser.remove( élément, nom );
	},

	// TODO : Maintenant que tous les appels à _data et _removeData ont été remplacés
	// avec des appels directs aux méthodes dataPriv, celles-ci peuvent être obsolètes.
	_data : fonction( élément, nom, données ) {
		renvoyer dataPriv.access( elem, nom, données );
	},

	_removeData : fonction( élément, nom ) {
		dataPriv.remove( élément, nom );
	}
} );

jQuery.fn.extend( {
	données : fonction( clé, valeur ) {
		var i, nom, données,
			elem = ceci[ 0 ],
			attrs = elem && elem.attributes;

		// Obtient toutes les valeurs
		si ( clé === indéfini ) {
			si ( cette.longueur ) {
				données = dataUser.get( elem );

				si ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.longueur;
					tandis que ( je-- ) {

						// Prise en charge : IE 11 uniquement
						// Les éléments attrs peuvent être nuls (trac-14894)
						si ( attrs[ i ] ) {
							nom = attrs[ i ].nom;
							si ( nom.indexOf( "data-" ) === 0 ) {
								nom = camelCase( nom.slice( 5 ) );
								dataAttr( elem, nom, data[ nom ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			renvoyer des données ;
		}

		// Définit plusieurs valeurs
		si ( typeof clé === "objet" ) {
			renvoie ceci.each( fonction() {
				dataUser.set( ceci, clé );
			} );
		}

		retourner l'accès( ceci, fonction( valeur ) {
			var données;

			// L'objet jQuery appelant (éléments correspondants) n'est pas vide
			// (et a donc un élément qui apparaît à this[ 0 ]) et le
			// Le paramètre `value` n'était pas indéfini. Un objet jQuery vide
			// donnera `undefined` pour elem = this[ 0 ] qui sera
			// lancer une exception si une tentative de lecture d'un cache de données est effectuée.
			si ( élément && valeur === indéfini ) {

				// Tenter d'obtenir des données à partir du cache
				// La clé sera toujours camelCased dans Data
				données = dataUser.get( elem, clé );
				si ( données !== indéfini ) {
					renvoyer des données ;
				}

				// Tenter de « découvrir » les données dans
				// Données personnalisées HTML5-* attrs
				données = dataAttr( élément, clé );
				si ( données !== indéfini ) {
					renvoyer des données ;
				}

				// Nous avons essayé très fort, mais les données n'existent pas.
				retour;
			}

			// Définir les données...
			ceci.chacun( fonction() {

				// Nous stockons toujours la clé camelCased
				dataUser.set( ceci, clé, valeur );
			} );
		}, null, valeur, arguments.length > 1, null, true );
	},

	removeData : fonction( touche ) {
		renvoie ceci.each( fonction() {
			dataUser.remove( ceci, clé );
		} );
	}
} );


jQuery.extend( {
	file d'attente : fonction (élément, type, données) {
		var file d'attente;

		si ( élément ) {
			type = ( type || "fx" ) + "file d'attente";
			file d'attente = dataPriv.get( élément, type );

			// Accélérez la sortie de la file d'attente en sortant rapidement s'il s'agit simplement d'une recherche
			si ( données ) {
				si ( !queue || Array.isArray( données ) ) {
					file d'attente = dataPriv.access( élément, type, jQuery.makeArray( données ) );
				} autre {
					file d'attente.push( données );
				}
			}
			file d'attente de retour || [];
		}
	},

	dequeue : fonction( élément, type ) {
		type = type || "fx";

		var file = jQuery.queue( élément, type ),
			startLength = file.length,
			fn = file d'attente.shift(),
			crochets = jQuery._queueHooks( élément, type ),
			suivant = fonction() {
				jQuery.dequeue( élément, type );
			};

		// Si la file d'attente des effets est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		si ( fn === "en cours" ) {
			fn = file d'attente.shift();
			longueur_début--;
		}

		si ( fn ) {

			// Ajoutez une sentinelle de progression pour empêcher la file d'attente des effets
			// automatiquement retiré de la file d'attente
			si ( type === "fx" ) {
				file.unshift( "en cours" );
			}

			// Effacer la dernière fonction d'arrêt de la file d'attente
			supprimer hooks.stop;
			fn.call( elem, suivant, crochets );
		}

		si ( !startLength && crochets ) {
			crochets.vide.feu();
		}
	},

	// Non public - génère un objet queueHooks ou renvoie l'objet actuel
	_queueHooks : fonction( élément, type ) {
		var key = type + "queueHooks";
		renvoie dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			vide : jQuery.Callbacks( "une fois la mémoire" ).add( function() {
				dataPriv.remove( elem, [ type + "file d'attente", clé ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	file d'attente : fonction( type, données ) {
		var setter = 2;

		si ( typeof type !== "chaîne" ) {
			données = type;
			type = "fx";
			setter--;
		}

		si ( arguments.length < setter ) {
			renvoie jQuery.queue( this[ 0 ], type );
		}

		renvoyer des données === indéfini ?
			ce :
			ceci.chacun( fonction() {
				var file = jQuery.queue( ceci, type, données );

				// Assurer des hooks pour cette file d'attente
				jQuery._queueHooks( ceci, type );

				si ( type === "fx" && file[ 0 ] !== "en cours" ) {
					jQuery.dequeue( ceci, type );
				}
			} );
	},
	dequeue : fonction( type ) {
		renvoie ceci.each( fonction() {
			jQuery.dequeue( ceci, type );
		} );
	},
	clearQueue : fonction( type ) {
		renvoie this.queue( type || "fx", [] );
	},

	// Obtenir une promesse résolue lorsque les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse : fonction( type, obj ) {
		var tmp,
			compte = 1,
			reporter = jQuery.Différé(),
			éléments = ceci,
			i = cette.longueur,
			résoudre = fonction() {
				si ( !( --count ) ) {
					defer.resolveWith( éléments, [ éléments ] );
				}
			};

		si ( typeof type !== "chaîne" ) {
			obj = type;
			type = indéfini;
		}
		type = type || "fx";

		tandis que ( je-- ) {
			tmp = dataPriv.get( éléments[ i ], type + "queueHooks" );
			si ( tmp && tmp.vide ) {
				compter++;
				tmp.empty.add( résoudre );
			}
		}
		résoudre();
		retourner defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Haut", "Droite", "Bas", "Gauche" ];

var documentElement = document.documentElement;



	var isAttached = fonction( élément ) {
			renvoyer jQuery.contains( elem.ownerDocument, elem );
		},
		composé = { composé: vrai };

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 uniquement
	// Vérifiez la pièce jointe au-delà des limites du DOM fantôme lorsque cela est possible (gh-3504)
	// Prise en charge : iOS 10.0-10.2 uniquement
	// Les premières versions d'iOS 10 prennent en charge `attachShadow` mais pas `getRootNode`,
	// conduisant à des erreurs. Nous devons vérifier `getRootNode`.
	si ( documentElement.getRootNode ) {
		isAttached = fonction( élément ) {
			renvoyer jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composé ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = fonction( élément, el ) {

		// isHiddenWithinTree peut être appelé à partir de la fonction jQuery#filter ;
		// dans ce cas, l'élément sera le deuxième argument
		élément = le || élément;

		// Le style en ligne l'emporte sur tout
		retourner elem.style.display === "aucun" ||
			élément.style.affichage === "" &&

			// Sinon, vérifiez le style calculé
			// Prise en charge : Firefox <=43 - 45
			// Les éléments déconnectés peuvent avoir un affichage calculé : aucun, donc confirmez d'abord que l'élément est
			// dans le document.
			estAttaché( élément ) &&

			jQuery.css( elem, "affichage" ) === "aucun";
	};



fonction adjustCSS( elem, prop, valueParts, tween ) {
	var ajusté, échelle,
		maxIterations = 20,
		valeuractuelle = tween ?
			fonction() {
				retourner tween.cur();
			} :
			fonction() {
				renvoyer jQuery.css( elem, prop, "" );
			},
		initial = valeuractuelle(),
		unité = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Le calcul de la valeur de départ est requis pour les éventuelles incompatibilités d'unités
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unité !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( élément, propriété ) );

	si ( initialInUnit && initialInUnit[ 3 ] !== unité ) {

		// Prise en charge : Firefox <=54
		// Réduisez de moitié la valeur cible de l'itération pour éviter les interférences des limites supérieures CSS (gh-2144)
		initiale = initiale / 2;

		// Unités de confiance signalées par jQuery.css
		unité = unité || initialInUnit[ 3 ];

		// Approximation itérative à partir d'un point de départ différent de zéro
		initialInUnit = +initial || 1;

		tandis que ( maxIterations-- ) {

			// Évaluer et mettre à jour notre meilleure estimation (en doublant les estimations qui se terminent par zéro).
			// Terminer si l'échelle est égale ou dépasse 1 (rendant le produit ancien*nouveau non positif).
			jQuery.style( elem, prop, initialInUnit + unit );
			si ( ( 1 - échelle ) * ( 1 - ( échelle = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / échelle;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Assurez-vous de mettre à jour les propriétés d'interpolation plus tard
		valueParts = valueParts || [];
	}

	si (valeurParties) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Appliquer un décalage relatif (+=/-=) si spécifié
		ajusté = valeurParties[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		si ( interpolation ) {
			tween.unit = unité;
			tween.start = initialInUnit;
			tween.end = ajusté;
		}
	}
	retour ajusté;
}


var defaultDisplayMap = {};

fonction getDefaultDisplay( élément ) {
	température variable,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		affichage = defaultDisplayMap[nodeName];

	si ( affichage ) {
		retourner l'affichage;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	affichage = jQuery.css( temp, "affichage" );

	temp.parentNode.removeChild( temp );

	si ( affichage === "aucun" ) {
		affichage = "bloquer";
	}
	defaultDisplayMap[nodeName] = affichage;

	retourner l'affichage;
}

fonction showHide( éléments, afficher ) {
	affichage var, élément,
		valeurs = [],
		indice = 0,
		longueur = éléments.length;

	// Déterminer une nouvelle valeur d'affichage pour les éléments qui doivent être modifiés
	pour ( ; index < longueur; index++ ) {
		elem = éléments[ index ];
		si ( !elem.style ) {
			continuer;
		}

		affichage = elem.style.display;
		si ( afficher ) {

			// Puisque nous forçons la visibilité sur les éléments masqués en cascade, une
			// une vérification est requise dans cette première boucle à moins que nous ayons une valeur d'affichage non vide (soit
			// en ligne ou sur le point d'être restauré)
			si ( affichage === "aucun" ) {
				valeurs[ index ] = dataPriv.get( elem, "display" ) || null;
				si ( !valeurs[ index ] ) {
					élément.style.affichage = "";
				}
			}
			si ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valeurs[ index ] = getDefaultDisplay( elem );
			}
		} autre {
			si ( affichage !== "aucun" ) {
				valeurs[ index ] = "aucun";

				// Rappelez-vous ce que nous écrasons
				dataPriv.set( elem, "affichage", affichage );
			}
		}
	}

	// Définir l'affichage des éléments dans une deuxième boucle pour éviter un reflow constant
	pour ( index = 0; index < longueur; index++ ) {
		si ( valeurs [ index ] != null ) {
			éléments[ index ].style.display = valeurs[ index ];
		}
	}

	éléments de retour;
}

jQuery.fn.extend( {
	afficher : fonction() {
		retourner showHide( ceci, vrai );
	},
	masquer : fonction() {
		retourner showHide( ceci );
	},
	basculer : fonction( état ) {
		si ( typeof état === "booléen" ) {
			retourner l'état ? this.show() : this.hide();
		}

		renvoie ceci.each( fonction() {
			si ( isHiddenWithinTree( ceci ) ) {
				jQuery( ceci ).show();
			} autre {
				jQuery( ceci ).cacher();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( fonction() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		entrée = document.createElement( "entrée" );

	// Prise en charge : Android 4.0 - 4.3 uniquement
	// Vérifier l'état perdu si le nom est défini (trac-11217)
	// Prise en charge : applications Web Windows (WWA)
	// `name` et `type` doivent utiliser .setAttribute pour WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "coché", "coché" );
	input.setAttribute( "nom", "t" );

	div.appendChild( entrée );

	// Prise en charge : Android <= 4.1 uniquement
	// L'ancien WebKit ne clone pas correctement l'état vérifié dans les fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Prise en charge : IE <=11 uniquement
	// Assurez-vous que la valeur par défaut de la zone de texte (et de la case à cocher) est correctement clonée
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Prise en charge : IE <= 9 uniquement
	// IE <=9 remplace les balises <option> par leur contenu lorsqu'elles sont insérées en dehors de
	// l'élément sélectionné.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// Nous devons fermer ces balises pour prendre en charge XHTML (trac-13200)
var wrapMap = {

	// Les analyseurs XHTML n'insèrent pas d'éléments par magie dans le
	// de la même manière que les analyseurs de soupe de balises le font. Nous ne pouvons donc pas raccourcir
	// ceci en omettant <tbody> ou d'autres éléments obligatoires.
	thème : [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_par défaut : [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Prise en charge : IE <= 9 uniquement
si ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


fonction getAll( contexte, tag ) {

	// Prise en charge : IE <=9 - 11 uniquement
	// Utilisez typeof pour éviter l'invocation de méthode sans argument sur les objets hôtes (trac-15151)
	var ret;

	si ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( balise || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( balise || "*" );

	} autre {
		ret = [];
	}

	si (balise === indéfini || balise && nodeName( contexte, balise ) ) {
		retourner jQuery.merge( [ contexte ], ret );
	}

	retour ret;
}


// Marquer les scripts comme ayant déjà été évalués
fonction setGlobalEval( éléments, refElements ) {
	var i = 0,
		l = longueur des éléments ;

	pour ( ; i < l; i++ ) {
		donnéesPriv.set(
			éléments [ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

fonction buildFragment( éléments, contexte, scripts, sélection, ignoré ) {
	var elem, tmp, tag, wrap, attaché, j,
		fragment = contexte.createDocumentFragment(),
		nœuds = [],
		je = 0,
		l = longueur des éléments ;

	pour ( ; i < l; i++ ) {
		elem = éléments[ i ];

		si ( élément || élément === 0 ) {

			// Ajouter des nœuds directement
			si ( toType( elem ) === "objet" ) {

				// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) lève sur l'ancien WebKit
				jQuery.merge( nœuds, elem.nodeType ? [ elem ] : elem );

			// Convertir un élément non HTML en un nœud de texte
			} sinon si ( !rhtml.test( elem ) ) {
				nœuds.push( context.createTextNode( elem ) );

			// Convertir le HTML en nœuds DOM
			} autre {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Désérialiser une représentation standard
				balise = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[balise] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descendez à travers les wrappers jusqu'au bon contenu
				j = wrap[ 0 ];
				tandis que ( j-- ) {
					tmp = tmp. dernier enfant;
				}

				// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) lève sur l'ancien WebKit
				jQuery.merge( nœuds, tmp.childNodes );

				// Se souvenir du conteneur de niveau supérieur
				tmp = fragment.firstChild;

				// Assurez-vous que les nœuds créés sont orphelins (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Supprimer l'encapsuleur du fragment
	fragment.textContent = "";

	je = 0;
	tandis que ( ( elem = nœuds[ i++ ] ) ) {

		// Ignorer les éléments déjà présents dans la collection de contexte (trac-4087)
		si ( sélection && jQuery.inArray( elem, sélection ) > -1 ) {
			si (ignoré) {
				ignoré.push( elem );
			}
			continuer;
		}

		attaché = estAttaché( elem );

		// Ajouter au fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Conserver l'historique d'évaluation du script
		si (attaché) {
			setGlobalEval( tmp );
		}

		// Capturer les exécutables
		si ( scripts ) {
			j = 0;
			tandis que ( ( elem = tmp[ j++ ] ) ) {
				si ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( élément );
				}
			}
		}
	}

	fragment de retour;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

fonction returnTrue() {
	renvoie vrai ;
}

fonction returnFalse() {
	retourner faux;
}

fonction sur( elem, types, sélecteur, données, fn, un ) {
	var origFn, type;

	// Les types peuvent être une carte de types/gestionnaires
	si ( typeof types === "objet" ) {

		// ( types-Objet, sélecteur, données )
		si ( typeof sélecteur !== "chaîne" ) {

			// ( types-Objet, données )
			données = données || sélecteur;
			sélecteur = indéfini;
		}
		pour ( tapez types ) {
			on( elem, type, sélecteur, données, types[ type ], un );
		}
		élément de retour;
	}

	si ( données == null && fn == null ) {

		// ( types, fn )
		fn = sélecteur;
		données = sélecteur = indéfini;
	} sinon si ( fn == null ) {
		si ( typeof sélecteur === "chaîne" ) {

			// ( types, sélecteur, fn )
			fn = données;
			données = indéfinies;
		} autre {

			// ( types, données, fn )
			fn = données;
			données = sélecteur;
			sélecteur = indéfini;
		}
	}
	si ( fn === faux ) {
		fn = returnFalse;
	} sinon si ( !fn ) {
		élément de retour;
	}

	si ( un === 1 ) {
		origFn = fn;
		fn = fonction( événement ) {

			// Peut utiliser un ensemble vide, puisque l'événement contient les informations
			jQuery().off( événement );
			retourner origFn.apply( ceci, arguments );
		};

		// Utilisez le même guide pour que l'appelant puisse supprimer à l'aide d'origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	retourner elem.each( fonction() {
		jQuery.event.add( ceci, types, fn, données, sélecteur );
	} );
}

/*
 * Fonctions d'aide à la gestion des événements – ne font pas partie de l'interface publique.
 * Félicitations à la bibliothèque addEvent de Dean Edwards pour de nombreuses idées.
 */
jQuery.événement = {

	mondial: {},

	ajouter : fonction( élément, types, gestionnaire, données, sélecteur ) {

		var handleObjIn, eventHandle, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.get( elem );

		// Attacher des événements uniquement aux objets qui acceptent des données
		si ( !acceptData( elem ) ) {
			retour;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire
		si ( gestionnaire.gestionnaire ) {
			handleObjIn = gestionnaire;
			gestionnaire = handleObjIn.handler;
			sélecteur = handleObjIn.selector;
		}

		// Assurez-vous que les sélecteurs non valides génèrent des exceptions au moment de l'attachement
		// Évaluer par rapport à documentElement dans le cas où elem est un nœud non-élément (par exemple, document)
		si ( sélecteur ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Assurez-vous que le gestionnaire possède un identifiant unique, utilisé pour le rechercher/supprimer ultérieurement
		si ( !handler.guid ) {
			gestionnaire.guid = jQuery.guid++;
		}

		// Initialiser la structure d'événement de l'élément et le gestionnaire principal, s'il s'agit du premier
		si ( !( événements = elemData.events ) ) {
			événements = elemData.events = Object.create( null );
		}
		si ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = fonction( e ) {

				// Jeter le deuxième événement d'un jQuery.event.trigger() et
				// lorsqu'un événement est appelé après le déchargement d'une page
				renvoie le type de jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Gérer plusieurs événements séparés par un espace
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.longueur;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Il *doit* y avoir un type, aucun gestionnaire d'espace de noms uniquement attaché
			si ( !type ) {
				continuer;
			}

			// Si l'événement change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié
			spécial = jQuery.event.special[ type ] || {};

			// Si le sélecteur est défini, déterminez le type d'API d'événement spécial, sinon le type est donné
			type = ( sélecteur ? special.delegateType : special.bindType ) || type;

			// Mise à jour spéciale basée sur le type nouvellement réinitialisé
			spécial = jQuery.event.special[ type ] || {};

			// handleObj est transmis à tous les gestionnaires d'événements
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				données : données,
				gestionnaire : gestionnaire,
				guid : gestionnaire.guid,
				sélecteur: sélecteur,
				needsContext : sélecteur && jQuery.expr.match.needsContext.test( sélecteur ),
				espace de noms : espaces de noms.join( "." )
			}, handleObjIn );

			// Initialiser la file d'attente du gestionnaire d'événements si nous sommes les premiers
			si ( !( gestionnaires = événements [ type ] ) ) {
				gestionnaires = événements [ type ] = [];
				gestionnaires.delegateCount = 0;

				// N'utilisez addEventListener que si le gestionnaire d'événements spéciaux renvoie false
				si ( !special.setup ||
					special.setup.call( elem, données, espaces de noms, eventHandle ) === false ) {

					si ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			si ( spécial.add ) {
				spécial.add.call( elem, handleObj );

				si ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Ajouter à la liste des gestionnaires de l'élément, délégués devant
			si ( sélecteur ) {
				gestionnaires.splice( gestionnaires.delegateCount++, 0, handleObj );
			} autre {
				gestionnaires.push( handleObj );
			}

			// Gardez une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global[ type ] = true;
		}

	},

	// Détacher un événement ou un ensemble d'événements d'un élément
	supprimer : fonction( élément, types, gestionnaire, sélecteur, mappedTypes ) {

		var j, nombre d'origines, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		si ( !elemData || !( événements = elemData.events ) ) {
			retour;
		}

		// Une fois pour chaque type.namespace dans les types ; le type peut être omis
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.longueur;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Dissocier tous les événements (sur cet espace de noms, s'il est fourni) pour l'élément
			si ( !type ) {
				pour (tapez les événements) {
					jQuery.event.remove( elem, type + types[ t ], gestionnaire, sélecteur, true );
				}
				continuer;
			}

			spécial = jQuery.event.special[ type ] || {};
			type = ( sélecteur ? special.delegateType : special.bindType ) || type;
			gestionnaires = événements[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Supprimer les événements correspondants
			origCount = j = gestionnaires.length;
			tandis que ( j-- ) {
				handleObj = gestionnaires[ j ];

				si ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !sélecteur || sélecteur === handleObj.sélecteur ||
						sélecteur === "**" && handleObj.selector ) ) {
					gestionnaires.splice( j, 1 );

					si ( handleObj.selector ) {
						gestionnaires.delegateCount--;
					}
					si ( spécial.supprimer ) {
						spécial.remove.call( elem, handleObj );
					}
				}
			}

			// Supprimer le gestionnaire d'événements générique si nous avons supprimé quelque chose et qu'il n'existe plus de gestionnaires
			// (évite le risque de récursivité sans fin lors de la suppression de gestionnaires d'événements spéciaux )
			si ( origCount && ! handlers.length ) {
				si ( !special.teardown ||
					special.teardown.call( elem, espaces de noms, elemData.handle ) === false ) {

					jQuery.removeEvent( élément, type, elemData.handle );
				}

				supprimer les événements [ type ];
			}
		}

		// Supprimer les données et l'extendo s'il n'est plus utilisé
		si ( jQuery.isEmptyObject( événements ) ) {
			dataPriv.remove( elem, "gérer les événements" );
		}
	},

	envoi : fonction( nativeEvent ) {

		var i, j, ret, correspondant, handleObj, handlerQueue,
			args = nouveau tableau( arguments.length ),

			// Créer un jQuery.Event accessible en écriture à partir de l'objet événement natif
			événement = jQuery.event.fix( nativeEvent ),

			gestionnaires = (
				dataPriv.get( ceci, "événements" ) || Object.create( null )
			)[ événement.type ] || [],
			spécial = jQuery.event.special[ event.type ] || {};

		// Utilisez le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args[ 0 ] = événement;

		pour ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		événement.delegateTarget = ceci;

		// Appelez le hook preDispatch pour le type mappé et laissez-le s'arrêter si vous le souhaitez
		si ( special.preDispatch && special.preDispatch.call( ceci, événement ) === faux ) {
			retour;
		}

		// Déterminer les gestionnaires
		handlerQueue = jQuery.event.handlers.call( ceci, événement, gestionnaires );

		// Exécutez d'abord les délégués ; ils voudront peut-être arrêter la propagation en dessous de nous
		je = 0;
		tandis que ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			événement.currentTarget = élément correspondant;

			j = 0;
			tandis que ( ( handleObj = matched.handlers[ j++ ] ) &&
				!événement.isImmediatePropagationStopped() ) {

				// Si l'événement est un espace de noms, alors chaque gestionnaire n'est invoqué que s'il l'est
				// spécialement universel ou ses espaces de noms sont un sur-ensemble de l'événement.
				si ( !event.rnamespace || handleObj.namespace === faux ||
					événement.rnespace.test( handleObj.namespace ) ) {

					événement.handleObj = handleObj;
					événement.données = handleObj.données;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					si ( ret !== indéfini ) {
						si ( ( event.result = ret ) === faux ) {
							événement.preventDefault();
							événement.stopPropagation();
						}
					}
				}
			}
		}

		// Appelez le hook postDispatch pour le type mappé
		si ( spécial.postDispatch ) {
			special.postDispatch.call( ceci, événement );
		}

		retourner l'événement.résultat;
	},

	gestionnaires : fonction( événement, gestionnaires ) {
		var i, handleObj, sel, gestionnaires correspondants, sélecteurs correspondants,
			handlerQueue = [],
			delegateCount = gestionnaires.delegateCount,
			cur = événement.cible;

		// Rechercher des gestionnaires de délégués
		si (delegueCount &&

			// Prise en charge : IE <=9
			// Arbres d'instances SVG Black-hole <use> (trac-13180)
			cur.nodeType &&

			// Prise en charge : Firefox <=42
			// Supprimer les clics violant les spécifications indiquant un bouton de pointeur non principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Prise en charge : IE 11 uniquement
			// ... mais pas les « clics » des touches fléchées des entrées radio, qui peuvent avoir `button` -1 (gh-2343)
			!( event.type === "clic" && event.button >= 1 ) ) {

			pour ( ; cur !== ceci; cur = cur.parentNode || ceci ) {

				// Ne pas vérifier les non-éléments (trac-13208)
				// Ne pas traiter les clics sur les éléments désactivés (trac-6911, trac-8165, trac-11382, trac-11764)
				si ( cur.nodeType === 1 && !( event.type === "clic" && cur.disabled === true ) ) {
					gestionnaires correspondants = [];
					sélecteurs correspondants = {};
					pour ( i = 0; i < delegateCount; i++ ) {
						handleObj = gestionnaires[ i ];

						// Ne pas entrer en conflit avec les propriétés de Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						si ( matchedSelectors [ sel ] === indéfini ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, ceci ).index( cur ) > -1 :
								jQuery.find( sel, ceci, null, [ cur ] ).length;
						}
						si ( matchedSelectors [ sel ] ) {
							correspondantHandlers.push( handleObj );
						}
					}
					si (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Ajouter les gestionnaires restants (directement liés)
		cur = ceci;
		si ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		retourner handlerQueue;
	},

	addProp : fonction( nom, hook ) {
		Objet.defineProperty( jQuery.Event.prototype, nom, {
			énumérable : vrai,
			configurable : vrai,

			obtenir : isFunction( hook ) ?
				fonction() {
					si ( cet.originalEvent ) {
						renvoyer le crochet( this.originalEvent );
					}
				} :
				fonction() {
					si ( cet.originalEvent ) {
						renvoyer this.originalEvent[ nom ];
					}
				},

			ensemble : fonction( valeur ) {
				Objet.defineProperty( ceci, nom, {
					énumérable : vrai,
					configurable : vrai,
					inscriptible : vrai,
					valeur : valeur
				} );
			}
		} );
	},

	correction : fonction( originalEvent ) {
		retourner originalEvent[ jQuery.expando ] ?
			événement original :
			nouveau jQuery.Event( originalEvent );
	},

	spécial: {
		charger: {

			// Empêcher les événements image.load déclenchés de remonter jusqu'à window.load
			noBubble: vrai
		},
		cliquez sur : {

			// Utiliser l'événement natif pour garantir l'état correct des entrées vérifiables
			configuration : fonction( données ) {

				// Pour une compressibilité mutuelle avec _default, remplacez l'accès `this` par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable grâce à la minification.
				var el = ceci || données;

				// Réclamer le premier gestionnaire
				si ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrée" ) ) {

					// dataPriv.set( el, "clic", ... )
					leverdeleverNative( el, "clic", true );
				}

				// Renvoie false pour permettre un traitement normal dans l'appelant
				retourner faux;
			},
			déclencheur : fonction( données ) {

				// Pour une compressibilité mutuelle avec _default, remplacez l'accès `this` par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable grâce à la minification.
				var el = ceci || données;

				// Forcer la configuration avant de déclencher un clic
				si ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrée" ) ) {

					leverdeleverNative( el, "clic" );
				}

				// Renvoyer une valeur non fausse pour permettre la propagation normale du chemin d'événement
				renvoie vrai ;
			},

			// Pour une cohérence entre les navigateurs, supprimez le .click() natif sur les liens
			// Empêchez-le également si nous sommes actuellement à l'intérieur d'une pile d'événements natifs à effet de levier
			_par défaut : fonction( événement ) {
				var cible = événement.cible;
				renvoie rcheckableType.test( target.type ) &&
					target.click && nodeName( cible, "entrée" ) &&
					dataPriv.get( cible, "clic" ) ||
					nodeName( cible, "a" );
			}
		},

		avant le déchargement : {
			postDispatch : fonction( événement ) {

				// Prise en charge : Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				si ( événement. résultat !== indéfini && événement. originalEvent ) {
					événement.originalEvent.returnValue = événement.résultat;
				}
			}
		}
	}
};

// Assurer la présence d'un écouteur d'événements qui gère les événements déclenchés manuellement
// événements synthétiques en interrompant la progression jusqu'à ce qu'ils soient réinvoqués en réponse à
// événements *natifs* qu'il déclenche directement, garantissant que les changements d'état ont
// s'est déjà produit avant que d'autres écouteurs ne soient invoqués.
fonction levierNative( el, type, isSetup ) {

	// L'absence de `isSetup` indique un appel de déclencheur, qui doit forcer la configuration via jQuery.event.add
	si ( !isSetup ) {
		si ( dataPriv.get( el, type ) === indéfini ) {
			jQuery.event.add( el, type, returnTrue );
		}
		retour;
	}

	// Enregistrez le contrôleur en tant que gestionnaire universel spécial pour tous les espaces de noms d'événements
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		espace de noms : faux,
		gestionnaire : fonction( événement ) {
			var résultat,
				enregistré = dataPriv.get( ceci, type );

			si ( ( événement.isTrigger & 1 ) && ce[ type ] ) {

				// Interrompre le traitement de l'événement synthétique externe déclenché
				si ( !sauvegardé) {

					// Stocker les arguments à utiliser lors de la gestion de l'événement natif interne
					// Il y aura toujours au moins un argument (un objet événement), donc ce tableau
					// ne sera pas confondu avec un objet de capture restant.
					enregistré = slice.call( arguments );
					dataPriv.set( ceci, type, enregistré );

					// Déclencher l'événement natif et capturer son résultat
					ce[ type ]();
					résultat = dataPriv.get( ceci, type );
					dataPriv.set( ceci, type, faux );

					si ( enregistré !== résultat ) {

						// Annuler l'événement synthétique externe
						événement.stopImmediatePropagation();
						événement.preventDefault();

						retourner le résultat;
					}

				// S'il s'agit d'un événement synthétique interne pour un événement avec un substitut bouillonnant
				// (focus ou flou), supposez que le substitut s'est déjà propagé à partir du déclenchement
				// l'événement natif et empêcher que cela ne se reproduise ici.
				// Techniquement, cela rend l'ordre incorrect par rapport à `.trigger()` (dans lequel le
				// le substitut bouillonnant se propage *après* la base non bouillonnante), mais cela semble
				// moins pire que la duplication.
				} sinon si ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					événement.stopPropagation();
				}

			// S'il s'agit d'un événement natif déclenché ci-dessus, tout est maintenant en ordre
			// Déclencher un événement synthétique interne avec les arguments d'origine
			} sinon si ( sauvegardé ) {

				// ...et capturer le résultat
				dataPriv.set( ceci, type, jQuery.event.trigger(
					enregistré[ 0 ],
					enregistré.slice( 1 ),
					ce
				) );

				// Interrompre la gestion de l'événement natif par tous les gestionnaires jQuery tout en autorisant
				// des gestionnaires natifs sur le même élément à exécuter. Sur la cible, cela est réalisé
				// en arrêtant la propagation immédiate uniquement sur l'événement jQuery. Cependant,
				// l'événement natif est ré-encapsulé par un événement jQuery à chaque niveau du
				// propagation donc la seule façon de l'arrêter pour jQuery est de l'arrêter pour
				// tout le monde via la fonction native `stopPropagation()`. Ce n'est pas un problème pour
				// focus/blur qui ne fait pas de bulles, mais qui arrête également de cliquer sur les cases à cocher
				// et les radios. Nous acceptons cette limitation.
				événement.stopPropagation();
				événement.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = fonction( élément, type, handle ) {

	// Ce « si » est nécessaire pour les objets simples
	si ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = fonction( src, props ) {

	// Autoriser l'instanciation sans le mot-clé 'new'
	si ( !( cette instance de jQuery.Event ) ) {
		renvoyer un nouveau jQuery.Event( src, props );
	}

	// Objet événement
	si ( src && src.type ) {
		cet.événementoriginal = src;
		ce.type = src.type;

		// Les événements qui remontent dans le document peuvent avoir été marqués comme empêchés
		// par un gestionnaire plus bas dans l'arbre ; reflète la valeur correcte.
		ceci.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indéfini &&

				// Prise en charge : Android <= 2.3 uniquement
				src.returnValue === faux ?
			retourVrai :
			retourFaux;

		// Créer les propriétés cibles
		// Prise en charge : Safari <=6 - 7 uniquement
		// La cible ne doit pas être un nœud de texte (trac-504, trac-13143)
		ceci.cible = ( src.cible && src.cible.nodeType === 3 ) ?
			src.target.parentNode :
			src.cible;

		ceci.currentTarget = src.currentTarget;
		ceci.relatedTarget = src.relatedTarget;

	// Type d'événement
	} autre {
		ce.type = src;
	}

	// Placer les propriétés explicitement fournies sur l'objet événement
	si ( accessoires ) {
		jQuery.extend( ceci, accessoires );
	}

	// Créer un horodatage si l'événement entrant n'en a pas
	this.timeStamp = src && src.timeStamp || Date.now();

	// Marquez-le comme corrigé
	ceci[ jQuery.expando ] = vrai;
};

// jQuery.Event est basé sur les événements DOM3 comme spécifié par la liaison de langage ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructeur : jQuery.Event,
	isDefaultPrevented:retourneFaux,
	isPropagationStopped:retourneFalse,
	isImmediatePropagationStopped:retourFalse,
	isSimulated: faux,

	PreventDefault : fonction() {
		var e = cet événement original;

		ceci.isDefaultPrevented = returnTrue;

		si ( e && ! ceci.estSimulé ) {
			e.preventDefault();
		}
	},
	stopPropagation : fonction() {
		var e = cet événement original;

		ceci.isPropagationStopped = returnTrue;

		si ( e && ! ceci.estSimulé ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation : fonction() {
		var e = cet événement original;

		ceci.isImmediatePropagationStopped = returnTrue;

		si ( e && ! ceci.estSimulé ) {
			e.stopImmediatePropagation();
		}

		ceci.stopPropagation();
	}
};

// Inclut tous les accessoires d'événements courants, y compris les accessoires spécifiques à KeyEvent et MouseEvent
jQuery.chaque( {
	altKey : vrai,
	bulles : vrai,
	annulable : vrai,
	modifiedTouches : vrai,
	Touche Ctrl : vrai,
	détail : vrai,
	eventPhase: vrai,
	métaclé : vrai,
	pageX: vrai,
	pageY: vrai,
	shiftKey : vrai,
	vue : vrai,
	"char": vrai,
	code : vrai,
	charCode: vrai,
	clé : vrai,
	keyCode: vrai,
	bouton : vrai,
	boutons : vrai,
	clientX: vrai,
	clientY : vrai,
	offsetX: vrai,
	offsetY: vrai,
	pointerId: vrai,
	pointerType: vrai,
	écranX: vrai,
	écranY: vrai,
	targetTouches : vrai,
	toElement: vrai,
	touche : vrai,
	lequel: vrai
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", flou: "focusout" }, fonction( type, delegateType ) {

	fonction focusMappedHandler( nativeEvent ) {
		si ( document.documentMode ) {

			// Prise en charge : IE 11+
			// Attachez un seul gestionnaire de mise au point/mise au point sur le document pendant que quelqu'un le souhaite
			// focus/blur. C'est parce que les premiers sont synchrones dans IE tandis que les seconds
			// sont asynchrones. Dans d'autres navigateurs, tous ces gestionnaires sont appelés de manière synchrone.

			// `handle` à partir de données privées encapsulerait déjà l'événement, mais nous avons besoin
			// pour changer le `type` ici.
			var handle = dataPriv.get( this, "handle" ),
				événement = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			événement.isSimulated = vrai;

			// Tout d'abord, gérer la mise au point/mise au point
			gérer( nativeEvent );

			// ...ensuite, gérer la mise au point/le flou
			//
			// la mise au point/le flou ne font pas de bulles pendant la mise au point/la mise au point ; simulez le premier en seulement
			// invocation du gestionnaire au niveau inférieur.
			si ( événement. cible === événement. cible actuelle ) {

				// La partie de configuration appelle `leverageNative`, qui, à son tour, appelle
				// `jQuery.event.add`, donc le handle d'événement aura déjà été défini
				// à ce stade.
				handle( événement );
			}
		} autre {

			// Pour les navigateurs non IE, attachez un seul gestionnaire de capture au document
			// pendant que quelqu'un veut se concentrer/se concentrer.
			jQuery.event.simulate(déléguéType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilisez l'événement natif si possible afin que la séquence de flou/mise au point soit correcte
		configuration : fonction() {

			var attache;

			// Réclamer le premier gestionnaire
			// dataPriv.set( ceci, "focus", ... )
			// dataPriv.set( ceci, "flou", ... )
			levierNative( ceci, type, vrai );

			si ( document.documentMode ) {

				// Prise en charge : IE 9 - 11+
				// Nous utilisons le même gestionnaire natif pour la mise au point et la mise au point (et la mise au point et le flou)
				// nous devons donc coordonner les étapes d'installation et de démontage entre ces événements.
				// Utilisez `delegateType` comme clé car `type` est déjà utilisé par `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				si ( !attache) {
					ceci.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attache || 0 ) + 1 );
			} autre {

				// Renvoie false pour permettre un traitement normal dans l'appelant
				retourner faux;
			}
		},
		déclencheur : fonction() {

			// Forcer la configuration avant le déclencheur
			levierNative( ceci, type );

			// Renvoyer une valeur non fausse pour permettre la propagation normale du chemin d'événement
			renvoie vrai ;
		},

		démontage : fonction() {
			var attache;

			si ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				si ( !attache) {
					ceci.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( ceci, delegateType );
				} autre {
					dataPriv.set( ceci, delegateType, attaches );
				}
			} autre {

				// Renvoie false pour indiquer que le démontage standard doit être appliqué
				retourner faux;
			}
		},

		// Supprimer la mise au point native ou le flou si nous sommes actuellement à l'intérieur
		// une pile d'événements natifs à effet de levier
		_par défaut : fonction( événement ) {
			renvoyer dataPriv.get( événement. cible, type );
		},

		delegateType: déléguéType
	};

	// Prise en charge : Firefox <=44
	// Firefox n'a pas d'événements focus(in | out)
	// Ticket associé - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Prise en charge : Chrome <=48 - 49, Safari <=9.0 - 9.1
	// les événements focus(in | out) se déclenchent après les événements de focus et de flou,
	// ce qui constitue une violation des spécifications - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Ticket associé - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Prise en charge : IE 9 - 11+
	// Pour préserver l'ordre relatif des événements de mise au point/mise au point et de sortie de mise au point/flou garantis sur la branche 3.x,
	// attacher un seul gestionnaire pour les deux événements dans IE.
	jQuery.event.special[deleguéType] = {
		configuration : fonction() {

			// Handle : nœuds réguliers (via `this.ownerDocument`), fenêtre
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || ceci,
				dataHolder = document.documentMode ? ceci : doc,
				attaches = dataPriv.get( dataHolder, déléguéType );

			// Prise en charge : IE 9 - 11+
			// Nous utilisons le même gestionnaire natif pour la mise au point et la mise au point (et la mise au point et le flou)
			// nous devons donc coordonner les étapes d'installation et de démontage entre ces événements.
			// Utilisez `delegateType` comme clé car `type` est déjà utilisé par `leverageNative`.
			si ( !attache) {
				si ( document.documentMode ) {
					ceci.addEventListener( delegateType, focusMappedHandler );
				} autre {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, déléguéType, (attache || 0 ) + 1 );
		},
		démontage : fonction() {
			var doc = this.ownerDocument || this.document || ceci,
				dataHolder = document.documentMode ? ceci : doc,
				attaches = dataPriv.get( dataHolder, déléguéType ) - 1;

			si ( !attache) {
				si ( document.documentMode ) {
					ceci.removeEventListener( delegateType, focusMappedHandler );
				} autre {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, déléguéType );
			} autre {
				dataPriv.set( dataHolder, déléguéType, attaches );
			}
		}
	};
} );

// Créer des événements mouseenter/leave à l'aide de mouseover/out et de vérifications au moment de l'événement
// pour que la délégation d'événements fonctionne dans jQuery.
// Faites la même chose pour pointerenter/pointerleave et pointerover/pointerout
//
// Prise en charge : Safari 7 uniquement
// Safari envoie trop souvent mouseenter ; voir :
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// pour la description du bug (il existait également dans les anciennes versions de Chrome).
jQuery.chaque( {
	mouseenter: "survol de la souris",
	mouseleave : « mouseout »,
	pointerenter : « pointerover »,
	pointerleave : « pointeur sortant »
}, fonction( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType : fix,
		bindType : correctif,

		handle: fonction( événement ) {
			var ret,
				cible = ceci,
				lié = événement.relatedTarget,
				handleObj = événement.handleObj;

			// Pour mouseenter/leave, appelez le gestionnaire si le lien est en dehors de la cible.
			// NB : Pas de relatedTarget si la souris a quitté/entré dans la fenêtre du navigateur
			si ( !related || (related !== cible && !jQuery.contains( cible, related ) ) ) {
				événement.type = handleObj.origType;
				ret = handleObj.handler.apply( ceci, arguments );
				événement.type = correctif;
			}
			retour ret;
		}
	};
} );

jQuery.fn.extend( {

	sur : fonction( types, sélecteur, données, fn ) {
		retourner sur( ceci, types, sélecteur, données, fn );
	},
	un : fonction( types, sélecteur, données, fn ) {
		retourner sur( ceci, types, sélecteur, données, fn, 1 );
	},
	désactivé : fonction( types, sélecteur, fn ) {
		var handleObj, type;
		si ( types && types.preventDefault && types.handleObj ) {

			// ( événement ) envoyé jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.espace de noms ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.sélecteur,
				handleObj.handler
			);
			retourne ceci;
		}
		si ( typeof types === "objet" ) {

			// ( types-objet [, sélecteur] )
			pour ( tapez types ) {
				ceci.off( type, sélecteur, types[ type ] );
			}
			retourne ceci;
		}
		si ( sélecteur === faux || typeof sélecteur === "fonction" ) {

			// ( types [, fn] )
			fn = sélecteur;
			sélecteur = indéfini;
		}
		si ( fn === faux ) {
			fn = returnFalse;
		}
		renvoie ceci.each( fonction() {
			jQuery.event.remove( ceci, types, fn, sélecteur );
		} );
	}
} );


var

	// Prise en charge : IE <=10 - 11, Edge 12 - 13 uniquement
	// Dans IE/Edge, l'utilisation de groupes regex ici provoque de graves ralentissements.
	// Voir https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<lien/i,

	// vérifié="vérifié" ou vérifié
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Préférez un tbody à sa table parent pour contenir de nouvelles lignes
fonction manipulationTarget( elem, content ) {
	si (nodeName( elem, "table" ) &&
		nodeName( contenu.nodeType !== 11 ? contenu : contenu.firstChild, "tr" ) ) {

		renvoie jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	élément de retour;
}

// Remplacer/restaurer l'attribut type des éléments de script pour une manipulation DOM sécurisée
fonction désactiverScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	élément de retour;
}
fonction restoreScript( elem ) {
	si ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} autre {
		elem.removeAttribute( "type" );
	}

	élément de retour;
}

fonction cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, événements ;

	si ( dest.nodeType !== 1 ) {
		retour;
	}

	// 1. Copier les données privées : événements, gestionnaires, etc.
	si ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		événements = pdataOld.events;

		si ( événements ) {
			dataPriv.remove( dest, "gérer les événements" );

			pour (tapez les événements) {
				pour ( i = 0, l = événements [ type ].length; i < l; i++ ) {
					jQuery.event.add( destination, type, événements[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copier les données utilisateur
	si ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Corriger les bugs IE, voir les tests de support
fonction fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Ne parvient pas à conserver l'état coché d'une case à cocher ou d'un bouton radio cloné.
	si (nodeName === "entrée" && rcheckableType.test( src.type ) ) {
		dest.vérifié = src.vérifié;

	// Ne parvient pas à ramener l'option sélectionnée à l'état sélectionné par défaut lors du clonage des options
	} else if ( nom_noeud === "entrée" || nom_noeud === "zone_texte" ) {
		dest.defaultValue = src.defaultValue;
	}
}

fonction domManip( collection, args, rappel, ignoré ) {

	// Aplatir tous les tableaux imbriqués
	args = plat( args );

	var fragment, premier, scripts, hasScripts, nœud, doc,
		je = 0,
		l = collection.longueur,
		iNoClone = l - 1,
		valeur = args[ 0 ],
		valueIsFunction = isFunction( valeur );

	// Nous ne pouvons pas cloner les fragments de nœuds contenant des éléments vérifiés, dans WebKit
	si ( valeurEstFonction ||
			( l > 1 && typeof valeur === "chaîne" &&
				!support.checkClone && rchecked.test( valeur ) ) ) {
		renvoie collection.each( fonction( index ) {
			var self = collection.eq( index );
			si ( valeurEstFonction ) {
				args[ 0 ] = valeur.call( this, index, self.html() );
			}
			domManip( self, args, rappel, ignoré );
		} );
	}

	si ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignoré );
		premier = fragment.firstChild;

		si ( fragment.childNodes.length === 1 ) {
			fragment = premier;
		}

		// Nécessite soit un nouveau contenu, soit un intérêt pour les éléments ignorés pour invoquer le rappel
		si ( premier || ignoré ) {
			scripts = jQuery.map( getAll( fragment, "script" ), désactiverScript );
			hasScripts = scripts.length;

			// Utiliser le fragment d'origine pour le dernier élément
			// au lieu du premier car il peut finir par
			// vidé de manière incorrecte dans certaines situations (trac-8070).
			pour ( ; i < l; i++ ) {
				nœud = fragment;

				si ( i !== iNoClone ) {
					nœud = jQuery.clone( nœud, vrai, vrai );

					// Conserver les références aux scripts clonés pour une restauration ultérieure
					si ( a des scripts ) {

						// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
						// push.apply(_, arraylike) lève sur l'ancien WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Conserver l'historique d'évaluation du script
		destElements = getAll( clone, "script" );
		si ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Renvoie l'ensemble cloné
		retourner le clone;
	},

	cleanData : fonction( éléments ) {
		var données, élément, type,
			spécial = jQuery.event.special,
			je = 0;

		pour ( ; ( elem = elems[ i ] ) !== indéfini; i++ ) {
			si ( acceptData( elem ) ) {
				si ( ( données = elem[ dataPriv.expando ] ) ) {
					si ( données. événements ) {
						pour ( tapez data.events ) {
							si ( spécial[ type ] ) {
								jQuery.event.remove( élément, type );

							// Ceci est un raccourci pour éviter la surcharge de jQuery.event.remove
							} autre {
								jQuery.removeEvent( élément, type, données.handle );
							}
						}
					}

					// Prise en charge : Chrome <= 35 - 45 +
					// Affectez undefined au lieu d'utiliser delete, voir Data#remove
					elem[ dataPriv.expando ] = indéfini;
				}
				si ( elem[ dataUser.expando ] ) {

					// Prise en charge : Chrome <= 35 - 45 +
					// Affectez undefined au lieu d'utiliser delete, voir Data#remove
					elem[ dataUser.expando ] = indéfini;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	détacher : fonction( sélecteur ) {
		retourner supprimer( ceci, sélecteur, vrai );
	},

	supprimer : fonction( sélecteur ) {
		retourner supprimer( ceci, sélecteur );
	},

	texte : fonction( valeur ) {
		retourner l'accès( ceci, fonction( valeur ) {
			valeur de retour === indéfinie ?
				jQuery.text( ceci ) :
				ceci.vide().chaque( fonction() {
					si ( ceci.nodeType === 1 || ceci.nodeType === 11 || ceci.nodeType === 9 ) {
						this.textContent = valeur;
					}
				} );
		}, null, valeur, arguments.length );
	},

	ajouter : fonction() {
		retourner domManip( ceci, arguments, fonction( elem ) {
			si ( ceci.nodeType === 1 || ceci.nodeType === 11 || ceci.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				cible.appendChild( elem );
			}
		} );
	},

	préfixer : fonction() {
		retourner domManip( ceci, arguments, fonction( elem ) {
			si ( ceci.nodeType === 1 || ceci.nodeType === 11 || ceci.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				cible.insertBefore( elem, cible.firstChild );
			}
		} );
	},

	avant : fonction() {
		retourner domManip( ceci, arguments, fonction( elem ) {
			si ( ceci.parentNode ) {
				ceci.parentNode.insertBefore( elem, ceci );
			}
		} );
	},

	après : fonction() {
		retourner domManip( ceci, arguments, fonction( elem ) {
			si ( ceci.parentNode ) {
				ceci.parentNode.insertBefore( elem, ceci.nextSibling );
			}
		} );
	},

	vide : fonction() {
		var élément,
			je = 0;

		pour ( ; ( elem = ceci[ i ] ) != null; i++ ) {
			si ( elem.nodeType === 1 ) {

				// Empêcher les fuites de mémoire
				jQuery.cleanData( getAll( elem, false ) );

				// Supprimez tous les nœuds restants
				elem.textContent = "";
			}
		}

		retourne ceci;
	},

	clone : fonction( donnéesEtEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? faux : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? donnéesAndEvents : deepDataAndEvents;

		renvoie cette.carte( fonction() {
			renvoie jQuery.clone( ceci, dataAndEvents, deepDataAndEvents );
		} );
	},

	html : fonction( valeur ) {
		retourner l'accès( ceci, fonction( valeur ) {
			var elem = this[ 0 ] || {},
				je = 0,
				l = cette.longueur;

			si ( valeur === indéfini && elem.nodeType === 1 ) {
				retourner elem.innerHTML;
			}

			// Voyons si nous pouvons prendre un raccourci et simplement utiliser innerHTML
			si ( typeof valeur === "chaîne" && !rnoInnerhtml.test( valeur ) &&
				!wrapMap[ ( rtagName.exec( valeur ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valeur = jQuery.htmlPrefilter( valeur );

				essayer {
					pour ( ; i < l; i++ ) {
						elem = ceci[ i ] || {};

						// Supprimez les nœuds d'éléments et évitez les fuites de mémoire
						si ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = valeur;
						}
					}

					élément = 0;

				// Si l'utilisation de innerHTML génère une exception, utilisez la méthode de secours
				} attraper ( e ) {}
			}

			si ( élément ) {
				this.empty().append( valeur );
			}
		}, null, valeur, arguments.length );
	},

	remplacerPar : fonction() {
		var ignoré = [];

		// Effectuez les modifications en remplaçant chaque élément de contexte non ignoré par le nouveau contenu
		retourner domManip( ceci, arguments, fonction( elem ) {
			var parent = this.parentNode;

			si ( jQuery.inArray( ceci, ignoré ) < 0 ) {
				jQuery.cleanData( getAll( ceci ) );
				si (parent) {
					parent.replaceChild( élément, ceci );
				}
			}

		// Forcer l'invocation du rappel
		}, ignoré );
	}
} );

jQuery.chaque( {
	appendTo : « ajouter »,
	prependTo: "préfixer",
	insertBefore : « avant »,
	insertAfter : « après »,
	replaceAll : « remplacerPar »
}, fonction( nom, original ) {
	jQuery.fn[ nom ] = fonction( sélecteur ) {
		différents éléments,
			ret = [],
			insérer = jQuery( sélecteur ),
			dernier = insérer.longueur - 1,
			je = 0;

		pour ( ; i <= dernier; i++ ) {
			elems = i === dernier ? ceci : this.clone( true );
			jQuery( insert[ i ] )[ original ]( éléments );

			// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
			// .get() car push.apply(_, arraylike) génère une erreur sur l'ancien WebKit
			push.apply(ret, elems.get() );
		}

		renvoie this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = fonction( élément ) {

		// Prise en charge : IE <=11 uniquement, Firefox <=30 (trac-15098, trac-14150)
		// IE génère des erreurs sur les éléments créés dans les fenêtres contextuelles
		// FF lance quant à lui des éléments de cadre via "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		si ( !vue || !vue.opener ) {
			vue = fenêtre;
		}

		renvoyer view.getComputedStyle( elem );
	};

var swap = fonction( élément, options, rappel ) {
	var ret, nom,
		vieux = {};

	// Mémorisez les anciennes valeurs et insérez les nouvelles
	pour ( nom dans les options ) {
		ancien[ nom ] = elem.style[ nom ];
		elem.style[ nom ] = options[ nom ];
	}

	ret = callback.call( elem );

	// Rétablir les anciennes valeurs
	pour ( nom dans les options ) {
		elem.style[ nom ] = ancien[ nom ];
	}

	retour ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( fonction() {

	// L'exécution des tests pixelPosition et boxSizingReliable ne nécessite qu'une seule mise en page
	// ils sont donc exécutés en même temps pour économiser le deuxième calcul.
	fonction computeStyleTests() {

		// Ceci est un singleton, nous devons l'exécuter une seule fois
		si ( !div ) {
			retour;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Seul Firefox inclut les largeurs de bordure
		// dans les dimensions calculées. (gh-4529)
		dimensionsTrfiables : fonction() {
			var table, tr, trChild, trStyle;
			si (fiableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;gauche:-11111px;border-collapse:séparé";
				tr.style.cssText = "box-sizing:content-box;border:1px solide";

				// Prise en charge : Chrome 86+
				// La hauteur définie via cssText n'est pas appliquée.
				// La hauteur calculée revient alors à 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Prise en charge : Android 8 Chrome 86+
				// Dans notre iframe bodyBackground.html,
				// l'affichage de tous les éléments div est défini sur « inline »,
				// ce qui pose un problème uniquement dans Android 8 Chrome 86.
				// S'assurer que le div est `display: block`
				// contourne ce problème.
				trChild.style.display = "bloc";

				documentElement
					.appendChild(tableau)
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = fenêtre.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			renvoie reliableTrDimensionsVal;
		}
	} );
} )();


fonction curCSS( elem, nom, calculé ) {
	var largeur, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nom ),

		// Prise en charge : Firefox 51+
		// Récupération du style avant le calcul d'une manière ou d'une autre
		// corrige un problème avec des valeurs erronées
		// sur les éléments détachés
		style = élément.style;

	calculé = calculé || getStyles( elem );

	// getPropertyValue est nécessaire pour :
	// .css('filter') (IE 9 uniquement, trac-12537)
	// .css('--customProperty) (gh-3144)
	si (calculé) {

		// Prise en charge : IE <=9 - 11+
		// IE ne prend en charge que « float » dans « getPropertyValue » ; dans les styles calculés
		// il n'est disponible que sous la forme `"cssFloat"`. Nous ne modifions plus les propriétés
		// envoyé à `.css()` en dehors de camelCasing, nous devons donc vérifier les deux.
		// Normalement, cela créerait une différence de comportement : si
		// `getPropertyValue` renvoie une chaîne vide, la valeur renvoyée
		// par `.css()` serait `undefined`. C'est généralement le cas pour
		// éléments déconnectés. Cependant, dans IE, même les éléments déconnectés
		// sans styles, renvoie `"none"` pour `getPropertyValue( "float" )`
		ret = calculé.getPropertyValue( nom ) || calculé[ nom ];

		si ( isCustomProp && ret ) {

			// Prise en charge : Firefox 105+, Chrome <=105+
			// La spécification nécessite de supprimer les espaces blancs pour les propriétés personnalisées (gh-4926).
			// Firefox supprime uniquement les espaces blancs de début. Chrome se réduit simplement
			// les espaces de début et de fin en un seul espace.
			//
			// Revenir à `undefined` si une chaîne vide est renvoyée.
			// Ceci réduit une définition manquante avec une propriété définie
			// et défini sur une chaîne vide mais il n'y a pas d'API standard
			// nous permettant de les différencier sans pénalité de performance
			// et renvoyer `undefined` s'aligne sur l'ancien jQuery.
			//
			// rtrimCSS traite U+000D RETOUR CHARIOT et U+000C SAUT DE FORMULAIRE
			// comme espace alors que CSS ne le fait pas, mais ce n'est pas un problème
			// parce que le prétraitement CSS les remplace par U+000A LINE FEED
			// (qui *est* un espace blanc CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || indéfini;
		}

		si ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( élément, nom );
		}

		// Un hommage au « hack génial de Dean Edwards »
		// Le navigateur Android renvoie un pourcentage pour certaines valeurs,
		// mais la largeur semble être de manière fiable en pixels.
		// Ceci est contraire à la spécification du projet CSSOM :
		// https://drafts.csswg.org/cssom/#resolved-values
		si ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nom ) ) {

			// Se souvenir des valeurs d'origine
			largeur = style.largeur;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Entrez les nouvelles valeurs pour obtenir une valeur calculée
			style.minWidth = style.maxWidth = style.width = ret;
			ret = largeur.calculée ;

			// Rétablir les valeurs modifiées
			style.width = largeur;
			style.minWidth = largeurmin;
			style.maxWidth = largeur maximale;
		}
	}

	retourner ret !== indéfini ?

		// Prise en charge : IE <=9 - 11 uniquement
		// IE renvoie la valeur zIndex sous forme d'entier.
		ret + "" :
		retraité;
}


fonction addGetHookIf( conditionFn, hookFn ) {

	// Définissez le hook, nous vérifierons lors de la première exécution s'il est vraiment nécessaire.
	retour {
		obtenir : fonction() {
			si ( conditionFn() ) {

				// Le crochet n'est pas nécessaire (ou il n'est pas possible de l'utiliser en raison
				// à la dépendance manquante), supprimez-la.
				supprimer ceci.get;
				retour;
			}

			// Hook nécessaire ; redéfinissez-le pour que le test de support ne soit pas exécuté à nouveau.
			retourner ( ceci.get = hookFn ).apply( ceci, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Renvoie une propriété préfixée par le fournisseur ou indéfinie
fonction vendorPropName( nom ) {

	// Vérifier les noms de fournisseurs préfixés
	var capName = nom[ 0 ].toUpperCase() + nom.slice( 1 ),
		i = cssPrefixes.length;

	tandis que ( je-- ) {
		nom = cssPrefixes[ i ] + capName;
		si ( nom dans emptyStyle ) {
			renvoyer le nom;
		}
	}
}

// Renvoie une propriété jQuery.cssProps ou une propriété préfixée par un fournisseur potentiellement mappée
fonction finalPropName( nom ) {
	var final = jQuery.cssProps[ nom ] || vendorProps[ nom ];

	si ( final ) {
		retour final;
	}
	si ( nom dans emptyStyle ) {
		renvoyer le nom;
	}
	renvoyer vendorProps[ nom ] = vendorPropName( nom ) || nom;
}


var

	// Échangeable si l'affichage est nul ou commence par un tableau
	// sauf "table", "table-cell" ou "table-caption"
	// Voir ici pour les valeurs d'affichage : https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position : "absolu", visibilité : "masqué", affichage : "bloc" },
	cssNormalTransform = {
		Espacement des lettres : « 0 »,
		Poids de la police : « 400 »
	};

fonction setPositiveNumber( _elem, valeur, soustraire ) {

	// Toutes les valeurs relatives (+/-) ont déjà été
	// normalisé à ce stade
	var matches = rcssNum.exec( valeur );
	matchs retour ?

		// Protection contre les « soustractions » non définies, par exemple lorsqu'elles sont utilisées comme dans cssHooks
		Math.max( 0, matches[ 2 ] - ( soustraire || 0 ) ) + ( matches[ 3 ] || "px" ) :
		valeur;
}

fonction boxModelAdjustment( élément, dimension, boîte, isBorderBox, styles, valeur calculée ) {
	var i = dimension === "largeur" ​​? 1 : 0,
		supplémentaire = 0,
		delta = 0,
		margeDelta = 0;

	// Un ajustement n'est peut-être pas nécessaire
	si ( boîte === ( isBorderBox ? "border" : "content" ) ) {
		retourner 0;
	}

	pour ( ; i < 4; i += 2 ) {

		// Les deux modèles de boîte excluent la marge
		// Comptez le delta de marge séparément pour l'ajouter uniquement après le réglage de la gouttière de défilement.
		// Ceci est nécessaire pour faire fonctionner les marges négatives avec `outerHeight( true )` (gh-3982).
		si ( boîte === "marge" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// Si nous arrivons ici avec une boîte de contenu, nous recherchons un « rembourrage » ou une « bordure » ou une « marge »
		si ( !isBorderBox ) {

			// Ajouter un remplissage
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// Pour « bordure » ou « marge », ajoutez une bordure
			si ( boîte !== "rembourrage" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Largeur", true, styles );

			// Mais gardez-le toujours à l'esprit sinon
			} autre {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Largeur", true, styles );
			}

		// Si nous arrivons ici avec une border-box (contenu + padding + bordure), nous recherchons "contenu" ou
		// "rembourrage" ou "marge"
		} autre {

			// Pour le « contenu », soustrayez le remplissage
			si ( boîte === "contenu" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// Pour « contenu » ou « rembourrage », soustrayez la bordure
			si ( boîte !== "marge" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Largeur", true, styles );
			}
		}
	}

	// Tenez compte du défilement positif de la zone de contenu lorsque cela est demandé en fournissant une valeur calculée
	si ( !isBorderBox && valeur calculée >= 0 ) {

		// offsetWidth/offsetHeight est une somme arrondie du contenu, du remplissage, de la gouttière de défilement et de la bordure
		// En supposant que la gouttière de défilement soit entière, soustrayez le reste et arrondissez à l'inférieur
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			valeur calculée -
			delta -
			supplémentaire -
			0,5

		// Si offsetWidth/offsetHeight est inconnu, nous ne pouvons pas déterminer la gouttière de défilement de la zone de contenu
		// Utilisez un zéro explicite pour éviter NaN (gh-3964)
		) ) || 0;
	}

	renvoie delta + marginDelta ;
}

fonction getWidthOrHeight( élément, dimension, extra ) {

	// Commencer avec le style calculé
	var styles = getStyles( elem ),

		// Pour éviter de forcer un reflow, récupérez boxSizing uniquement si nous en avons besoin (gh-4322).
		// Fausse boîte de contenu jusqu'à ce que nous sachions qu'elle est nécessaire pour connaître la vraie valeur.
		boxSizingNeeded = !support.boxSizingReliable() || supplémentaire,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = estBorderBox,

		val = curCSS( élément, dimension, styles ),
		offsetProp = "décalage" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Prise en charge : Firefox <=54
	// Renvoyer une valeur non pixellisée déroutante ou feindre l'ignorance, selon le cas.
	si ( rnumnonpx.test( val ) ) {
		si ( !extra ) {
			retourner val;
		}
		val = "auto";
	}


	// Prise en charge : IE 9 - 11 uniquement
	// Utilisez offsetWidth/offsetHeight lorsque le dimensionnement de la boîte n'est pas fiable.
	// Dans ces cas, on peut faire confiance à la valeur calculée pour être une bordure.
	si ( ( !support.boxSizingReliable() && isBorderBox ||

		// Prise en charge : IE 10 - 11+, Edge 15 - 18+
		// IE/Edge signale une erreur `getComputedStyle` des lignes du tableau avec la largeur/hauteur
		// défini dans CSS tandis que les propriétés `offset*` signalent des valeurs correctes.
		// Il est intéressant de noter que dans certains cas, IE 9 ne souffre pas de ce problème.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Revenir à offsetWidth/offsetHeight lorsque la valeur est « auto »
		// Cela se produit pour les éléments en ligne sans paramètre explicite (gh-3571)
		val === "auto" ||

		// Prise en charge : Android <=4.1 - 4.3 uniquement
		// Utilisez également offsetWidth/offsetHeight pour les dimensions en ligne mal signalées (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Assurez-vous que l'élément est visible et connecté
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Le cas échéant, offsetWidth/offsetHeight indiquent les dimensions approximatives de la boîte de bordure.
		// Si non disponible (par exemple, SVG), supposez un dimensionnement de boîte non fiable et interprétez le
		// valeur récupérée en tant que dimension de zone de contenu.
		valueIsBorderBox = offsetProp dans l'élément ;
		si ( valeurIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normaliser "" et auto
	val = parseFloat( val ) || 0;

	// Ajuster le modèle de boîte de l'élément
	retour ( val +
		ajustement du modèle de boîte(
			élément,
			dimension,
			supplémentaire || ( isBorderBox ? "border" : "content" ),
			valeurIsBorderBox,
			styles,

			// Fournissez la taille calculée actuelle pour demander le calcul de la gouttière de défilement (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Ajoutez des hooks de propriété de style pour remplacer la valeur par défaut
	// comportement d'obtention et de définition d'une propriété de style
	cssHooks : {
		opacité : {
			obtenir : fonction( élément, calculé ) {
				si (calculé) {

					// Nous devrions toujours obtenir un nombre en retour de l'opacité
					var ret = curCSS( elem, "opacité" );
					return ret === "" ? "1" : retrait;
				}
			}
		}
	},

	// N'ajoutez pas automatiquement « px » à ces propriétés potentiellement sans unité
	cssNumber : {
		animationIterationCount : vrai,
		aspectRatio: vrai,
		borderImageSlice: vrai,
		columnCount: vrai,
		flexGrow : vrai,
		flexShrink: vrai,
		fontWeight: vrai,
		gridArea: vrai,
		gridColumn: vrai,
		gridColumnEnd : vrai,
		gridColumnStart : vrai,
		gridRow : vrai,
		gridRowEnd : vrai,
		gridRowStart : vrai,
		hauteur de la ligne : vrai,
		opacité : vrai,
		ordre : vrai,
		orphelins : vrai,
		échelle : vraie,
		veuves : c'est vrai,
		zIndex : vrai,
		zoom : vrai,

		// En rapport avec SVG
		fillOpacity : vrai,
		floodOpacity : vrai,
		stopOpacity : vrai,
		strokeMiterlimit: vrai,
		strokeOpacity: vrai
	},

	// Ajoutez les propriétés dont vous souhaitez corriger les noms avant
	// définition ou obtention de la valeur
	cssProps : {},

	// Obtenir et définir la propriété de style sur un nœud DOM
	style : fonction( élément, nom, valeur, extra ) {

		// Ne pas définir de styles sur les nœuds de texte et de commentaire
		si ( !élément || elem.nodeType === 3 || elem.nodeType === 8 || !élément.style ) {
			retour;
		}

		// Assurez-vous que nous travaillons avec le bon nom
		var ret, type, crochets,
			origName = camelCase( nom ),
			isCustomProp = rcustomProp.test( nom ),
			style = élément.style;

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne le faisons pas
		// je souhaite interroger la valeur s'il s'agit d'une propriété CSS personnalisée
		// puisqu'ils sont définis par l'utilisateur.
		si ( !isCustomProp ) {
			nom = finalPropName( origName );
		}

		// Obtient le hook pour la version préfixée, puis la version non préfixée
		hooks = jQuery.cssHooks[ nom ] || jQuery.cssHooks[ origName ];

		// Vérifiez si nous définissons une valeur
		si ( valeur !== indéfini ) {
			type = type de valeur ;

			// Convertir "+=" ou "-=" en nombres relatifs (trac-7345)
			si ( type === "chaîne" && ( ret = rcssNum.exec( valeur ) ) && ret[ 1 ] ) {
				valeur = adjustCSS( elem, nom, ret );

				// Corrige le bug trac-9237
				type = "numéro";
			}

			// Assurez-vous que les valeurs null et NaN ne sont pas définies (trac-7116)
			si ( valeur == null || valeur !== valeur ) {
				retour;
			}

			// Si un nombre a été transmis, ajoutez l'unité (sauf pour certaines propriétés CSS)
			// La vérification isCustomProp peut être supprimée dans jQuery 4.0 lorsque nous ajoutons uniquement automatiquement
			// "px" à quelques valeurs codées en dur.
			si ( type === "numéro" && !isCustomProp ) {
				valeur += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// les accessoires background-* affectent les valeurs du clone d'origine
			si ( !support.clearCloneStyle && valeur === "" && nom.indexOf( "arrière-plan" ) === 0 ) {
				style[ nom ] = "hériter";
			}

			// Si un hook a été fourni, utilisez cette valeur, sinon définissez simplement la valeur spécifiée
			si ( !hooks || !( "set" dans hooks ) ||
				( valeur = hooks.set( elem, valeur, extra ) ) !== indéfini ) {

				si ( isCustomProp ) {
					style.setProperty( nom, valeur );
				} autre {
					style[ nom ] = valeur;
				}
			}

		} autre {

			// Si un hook a été fourni, récupérez la valeur non calculée à partir de là
			si ( crochets && "get" dans les crochets &&
				( ret = hooks.get( elem, false, extra ) ) !== indéfini ) {

				retour ret;
			}

			// Sinon, récupérez simplement la valeur de l'objet de style
			retourner style[ nom ];
		}
	},

	css : fonction( élément, nom, extra, styles ) {
		var val, num, crochets,
			origName = camelCase( nom ),
			isCustomProp = rcustomProp.test( nom );

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne le faisons pas
		// je souhaite modifier la valeur s'il s'agit d'une propriété CSS personnalisée
		// puisqu'ils sont définis par l'utilisateur.
		si ( !isCustomProp ) {
			nom = finalPropName( origName );
		}

		// Essayez le nom préfixé suivi du nom non préfixé
		hooks = jQuery.cssHooks[ nom ] || jQuery.cssHooks[ origName ];

		// Si un hook a été fourni, récupérez la valeur calculée à partir de là
		si ( crochets && "get" dans les crochets ) {
			val = hooks.get( elem, true, extra );
		}

		// Sinon, s'il existe un moyen d'obtenir la valeur calculée , utilisez-le
		si ( val === indéfini ) {
			val = curCSS( élément, nom, styles );
		}

		// Convertir « normal » en valeur calculée
		si ( val === "normal" && nom dans cssNormalTransform ) {
			val = cssNormalTransform[ nom ];
		}

		// Rendre numérique si forcé ou si un qualificateur a été fourni et val semble numérique
		si ( supplémentaire === "" || supplémentaire ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		retourner val;
	}
} );

jQuery.each( [ "hauteur", "largeur" ​​], fonction( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		obtenir : fonction( élément, calculé, supplémentaire ) {
			si (calculé) {

				// Certains éléments peuvent avoir des informations de dimension si nous les affichons de manière invisible
				// mais il doit avoir un style d'affichage actuel qui serait bénéfique
				retourner rdisplayswap.test( jQuery.css( elem, "affichage" ) ) &&

					// Prise en charge : Safari 8+
					// Les colonnes de tableau dans Safari ont un offsetWidth différent de zéro et zéro
					// getBoundingClientRect().width sauf si l'affichage est modifié.
					// Prise en charge : IE <=11 uniquement
					// Exécution de getBoundingClientRect sur un nœud déconnecté
					// dans IE génère une erreur.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					échanger( élément, cssShow, fonction() {
						retourner getWidthOrHeight( élément, dimension, extra );
					} ) :
					getWidthOrHeight( élément, dimension, extra );
			}
		},

		ensemble : fonction( élément, valeur, extra ) {
			var correspond,
				styles = getStyles( élément ),

				// Ne lisez styles.position que si le test a une chance d'échouer
				// pour éviter de forcer un reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolu",

				// Pour éviter de forcer un reflow, récupérez boxSizing uniquement si nous en avons besoin (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || supplémentaire,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				soustraire = supplémentaire ?
					ajustement du modèle de boîte(
						élément,
						dimension,
						supplémentaire,
						estBorderBox,
						styles
					) :
					0;

			// Tenez compte des dimensions de bordure non fiables en comparant le décalage* aux valeurs calculées et
			// simulation d'une boîte de contenu pour obtenir une bordure et un remplissage (gh-3699)
			si ( isBorderBox && scrollboxSizeBuggy ) {
				soustraire -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( élément, dimension, "bordure", faux, styles ) -
					0,5
				);
			}

			// Convertir en pixels si un ajustement de valeur est nécessaire
			si ( soustraire && ( correspond = rcssNum.exec( valeur ) ) &&
				( correspondances[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = valeur;
				valeur = jQuery.css( élément, dimension );
			}

			retourner setPositiveNumber( elem, valeur, soustraire );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	fonction( élément, calculé ) {
		si (calculé) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().gauche -
					échanger( élément, { margeGauche: 0 }, fonction() {
						renvoyer elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// Ces hooks sont utilisés par animate pour développer les propriétés
jQuery.chaque( {
	marge: "",
	rembourrage : "",
	bordure : « Largeur »
}, fonction( préfixe, suffixe ) {
	jQuery.cssHooks[ préfixe + suffixe ] = {
		développer : fonction( valeur ) {
			var i = 0,
				développé = {},

				// Suppose un seul nombre s'il ne s'agit pas d'une chaîne
				parties = typeof valeur === "chaîne" ? valeur.split( " " ) : [ valeur ];

			pour ( ; i < 4; i++ ) {
				développé[préfixe + cssExpand[i] + suffixe] =
					parties[ i ] || parties[ i - 2 ] || parties[ 0 ];
			}

			retour élargi;
		}
	};

	si ( préfixe !== "marge" ) {
		jQuery.cssHooks[ préfixe + suffixe ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css : fonction( nom, valeur ) {
		retourner l'accès( ceci, fonction( élément, nom, valeur ) {
			styles variables, longueur,
				carte = {},
				je = 0;

			si ( Array.isArray( nom ) ) {
				styles = getStyles( élément );
				len = nom.longueur;

				pour ( ; i < len; i++ ) {
					carte[ nom[ i ] ] = jQuery.css( elem, nom[ i ], false, styles );
				}

				carte de retour;
			}

			valeur de retour !== indéfini ?
				jQuery.style( élément, nom, valeur ) :
				jQuery.css( élément, nom );
		}, nom, valeur, arguments.length > 1 );
	}
} );


fonction Tween( élément, options, accessoire, fin, assouplissement ) {
	renvoyer un nouveau Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructeur : Tween,
	init : fonction( élément, options, accessoire, fin, assouplissement, unité ) {
		cet.élément = elem;
		ceci.prop = prop;
		this.easing = assouplissement || jQuery.easing._default;
		ceci.options = options;
		ceci.début = ceci.maintenant = ceci.cur();
		ceci.fin = fin;
		this.unit = unité || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: fonction() {
		var hooks = Tween.propHooks[ this.prop ];

		retourner les crochets && hooks.get ?
			hooks.get( ceci ) :
			Tween.propHooks._default.get( ceci );
	},
	exécuter : fonction( pourcentage ) {
		var assoupli,
			crochets = Tween.propHooks[ this.prop ];

		si ( ceci.options.duration ) {
			ceci.pos = assoupli = jQuery.easing[ ceci.assouplissement ](
				pourcentage, this.options.duration * pourcentage, 0, 1, this.options.duration
			);
		} autre {
			this.pos = assoupli = pourcentage;
		}
		ceci.maintenant = ( ceci.fin - ceci.début ) * assoupli + ceci.début;

		si ( ceci.options.étape ) {
			this.options.step.call( this.elem, this.now, this );
		}

		si ( crochets && hooks.set ) {
			crochets.set( ceci );
		} autre {
			Tween.propHooks._default.set( ceci );
		}
		retourne ceci;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_défaut: {
		obtenir : fonction( tween ) {
			var résultat;

			// Utiliser une propriété sur l'élément directement lorsqu'il ne s'agit pas d'un élément DOM,
			// ou lorsqu'il n'existe aucune propriété de style correspondante.
			si ( tween.elem.nodeType !== 1 ||
				tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null ) {
				retourner tween.elem[ tween.prop ];
			}

			// Passer une chaîne vide comme 3ème paramètre à .css sera automatiquement
			// tenter un parseFloat et revenir à une chaîne si l'analyse échoue.
			// Les valeurs simples telles que « 10 px » sont analysées en Float ;
			// les valeurs complexes telles que « rotate(1rad) » sont renvoyées telles quelles.
			résultat = jQuery.css( tween.elem, tween.prop, "" );

			// Les chaînes vides, null, undefined et « auto » sont converties en 0.
			retour !résultat || résultat === "auto" ? 0 : résultat;
		},
		ensemble : fonction( tween ) {

			// Utilisez le hook step pour la compatibilité arrière.
			// Utilisez cssHook s'il est présent.
			// Utilisez .style s'il est disponible et utilisez des propriétés simples lorsqu'elles sont disponibles.
			si ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} sinon si ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[tween.prop] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} autre {
				tween.elem[ tween.prop ] = tween.maintenant;
			}
		}
	}
};

// Prise en charge : IE <= 9 uniquement
// Approche basée sur la panique pour configurer les éléments sur des nœuds déconnectés
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	ensemble : fonction( tween ) {
		si ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.maintenant;
		}
	}
};

jQuery.easing = {
	linéaire : fonction( p ) {
		retour p;
	},
	balançoire : fonction( p ) {
		renvoie 0,5 - Math.cos( p * Math.PI ) / 2;
	},
	_par défaut : « balançoire »
};

jQuery.fx = Tween.prototype.init;

// Compatibilité rétroactive <1,8 point d'extension
jQuery.fx.step = {};




var
	fxNow, en cours,
	rfxtypes = /^(?:basculer|afficher|masquer)$/,
	rrun = /queueHooks$/;

fonction planning() {
	si ( en cours ) {
		si ( document.hidden === faux && window.requestAnimationFrame ) {
			window.requestAnimationFrame( programme );
		} autre {
			window.setTimeout( programme, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Les animations créées de manière synchrone s'exécuteront de manière synchrone
fonction createFxNow() {
	fenêtre.setTimeout( fonction() {
		fxNow = indéfini;
	} );
	retour ( fxNow = Date.now() );
}

// Générer des paramètres pour créer une animation standard
fonction genFx( type, includeWidth ) {
	var lequel,
		je = 0,
		attrs = { hauteur: type };

	// Si nous incluons la largeur, la valeur de l'étape est 1 pour effectuer toutes les valeurs cssExpand,
	// sinon la valeur de l'étape est 2 pour ignorer la gauche et la droite
	includeWidth = includeWidth ? 1 : 0;
	pour ( ; i < 4; i += 2 - includeWidth ) {
		lequel = cssExpand[ i ];
		attrs[ "marge" + lequel ] = attrs[ "rembourrage" + lequel ] = type;
	}

	si ( inclureLargeur ) {
		attrs.opacité = attrs.largeur = type;
	}

	renvoyer les attributs ;
}

fonction createTween( valeur, accessoire, animation ) {
	var entre,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		indice = 0,
		longueur = collection.length;
	pour ( ; index < longueur; index++ ) {
		si ( ( tween = collection[ index ].call( animation, prop, valeur ) ) ) {

			// Nous avons terminé avec cette propriété
			retourner l'interpolation ;
		}
	}
}

fonction defaultPrefilter( elem, props, opts ) {
	var prop, valeur, bascule, crochets, oldfire, propTween, restoreDisplay, affichage,
		isBox = "largeur" ​​dans les accessoires || "hauteur" dans les accessoires,
		anim = ceci,
		orig = {},
		style = élément.style,
		caché = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( élément, "fxshow" );

	// Les animations qui sautent la file d'attente détournent les hooks fx
	si ( !opts.queue ) {
		crochets = jQuery._queueHooks( elem, "fx" );
		si ( hooks.unqueued == null ) {
			crochets.unqueued = 0;
			oldfire = crochets.vides.feu;
			crochets.vide.feu = fonction() {
				si ( !hooks.unqueued ) {
					vieux feu();
				}
			};
		}
		crochets.unqueued++;

		anim.toujours( fonction() {

			// Assurez-vous que le gestionnaire complet est appelé avant la fin de cette opération
			anim.toujours( fonction() {
				crochets.unqueued--;
				si ( !jQuery.queue( elem, "fx" ).length ) {
					crochets.vide.feu();
				}
			} );
		} );
	}

	// Détecter les animations d'affichage/masquage
	pour ( prop dans props ) {
		valeur = accessoires[prop];
		si ( rfxtypes.test( valeur ) ) {
			supprimer les accessoires [prop] ;
			bascule = bascule || valeur === "bascule";
			si ( valeur === ( caché ? "masquer" : "afficher" ) ) {

				// Prétendre être caché s'il s'agit d'un « spectacle » et
				// il y a encore des données provenant d'un affichage/masquage arrêté
				si ( valeur === "afficher" && dataShow && dataShow[ prop ] !== indéfini ) {
					caché = vrai;

				// Ignorer toutes les autres données d'affichage/masquage no-op
				} autre {
					continuer;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Sortez si c'est un no-op comme .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	si ( !propTween && jQuery.isEmptyObject( orig ) ) {
		retour;
	}

	// Restreindre les styles « débordement » et « affichage » pendant les animations de boîte
	si ( isBox && elem.nodeType === 1 ) {

		// Prise en charge : IE <=9 - 11, Edge 12 - 15
		// Enregistrez les 3 attributs de débordement car IE ne déduit pas le raccourci
		// à partir de overflowX et overflowY de valeur identique et Edge reflète simplement
		// la valeur overflowX ici.
		options.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identifier un type d'affichage, en préférant les anciennes données d'affichage/masquage à la cascade CSS
		restoreDisplay = donnéesAfficher && donnéesAfficher.affichage;
		si ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "affichage" );
		}
		affichage = jQuery.css( elem, "affichage" );
		si ( affichage === "aucun" ) {
			si ( restaurerAffichage ) {
				affichage = restaurerAffichage;
			} autre {

				// Obtenir une ou plusieurs valeurs non vides en forçant temporairement la visibilité
				afficherMasquer( [ élément ], vrai );
				restoreDisplay = elem.style.display || restoreDisplay;
				affichage = jQuery.css( elem, "affichage" );
				afficherMasquer( [ élément ] );
			}
		}

		// Animer les éléments en ligne en tant que blocs en ligne
		si ( affichage === "inline" || affichage === "inline-block" && restoreDisplay != null ) {
			si ( jQuery.css( elem, "float" ) === "aucun" ) {

				// Restaurer la valeur d'affichage d'origine à la fin des animations d'affichage/masquage pures
				si ( !propTween ) {
					anim.done( fonction() {
						style.display = restaurerAffichage;
					} );
					si ( restoreDisplay == null ) {
						affichage = style.affichage;
						restoreDisplay = affichage === "aucun" ? "" : affichage;
					}
				}
				style.display = "bloc-en-ligne";
			}
		}
	}

	si ( opts.overflow ) {
		style.overflow = "caché";
		anim.toujours( fonction() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implémenter des animations d'affichage/masquage
	propTween = faux;
	pour (prop dans orig) {

		// Configuration générale d'affichage/masquage pour cette animation d'élément
		si ( !propTween ) {
			si ( donnéesAfficher ) {
				si ( "caché" dans dataShow ) {
					caché = dataShow.hidden;
				}
			} autre {
				dataShow = dataPriv.access( elem, "fxshow", { affichage: restoreDisplay } );
			}

			// Stockez caché/visible pour basculer afin que `.stop().toggle()` « inverse »
			si ( bascule ) {
				dataShow.hidden = !caché;
			}

			// Afficher les éléments avant de les animer
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: propriétés,
			Options originales : options,
			heure de début : fxNow || createFxNow(),
			durée : options.duration,
			préadolescents : [],
			createTween : fonction( prop, fin ) {
				var tween = jQuery.Tween( élément, animation.opts, prop, fin,
					animation.opts.specialEasing[prop] || animation.opts.easing );
				animation.tweens.push( tween );
				retourner l'interpolation ;
			},
			arrêt : fonction( gotoEnd ) {
				var index = 0,

					// Si nous allons jusqu'au bout, nous voulons exécuter tous les tweens
					// sinon on saute cette partie
					longueur = gotoEnd ? animation.tweens.length : 0;
				si ( arrêté ) {
					retourne ceci;
				}
				arrêté = vrai;
				pour ( ; index < longueur; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Résoudre quand nous avons joué la dernière image ; sinon, rejeter
				si ( aller à la fin ) {
					différé.notifyWith( elem, [ animation, 1, 0 ] );
					différé.resolveWith( elem, [ animation, gotoEnd ] );
				} autre {
					différé.rejectWith( elem, [ animation, gotoEnd ] );
				}
				retourne ceci;
			}
		} ),
		accessoires = animation.props;

	propFilter(props, animation.opts.specialEasing);

	pour ( ; index < longueur; index++ ) {
		résultat = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		si ( résultat ) {
			si ( isFunction( résultat.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					résultat.stop.bind( résultat );
			}
			retourner le résultat;
		}
	}

	jQuery.map( props, createTween, animation );

	si ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( élément, animation );
	}

	// Attacher des rappels à partir d'options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.toujours( animation.opts.toujours );

	jQuery.fx.timer(
		jQuery.extend( coche, {
			élément : élément,
			anim: animation,
			file d'attente : animation.opts.queue
		} )
	);

	animation de retour;
}

jQuery.Animation = jQuery.extend(Animation, {

	interpolations : {
		"*": [ fonction( prop, valeur ) {
			var tween = this.createTween( prop, valeur );
			adjustCSS( tween.elem, prop, rcssNum.exec( valeur ), tween );
			retourner l'interpolation ;
		} ]
	},

	tweener : fonction( props, rappel ) {
		si ( isFunction( accessoires ) ) {
			rappel = accessoires;
			accessoires = [ "*" ];
		} autre {
			accessoires = accessoires.match( rnothtmlwhite );
		}

		var prop,
			indice = 0,
			longueur = accessoires.longueur;

		pour ( ; index < longueur; index++ ) {
			prop = accessoires[ index ];
			Animation.tweeners[prop] = Animation.tweeners[prop] || [];
			Animation.tweeners[prop].unshift(callback);
		}
	},

	préfiltres : [ defaultPrefilter ],

	préfiltre : fonction( rappel, préfixe ) {
		si (préfixer) {
			Animation.prefilters.unshift( rappel );
		} autre {
			Animation.prefilters.push( rappel );
		}
	}
} );

jQuery.speed = function( vitesse, assouplissement, fn ) {
	var opt = vitesse && typeof vitesse === "objet" ? jQuery.extend( {}, vitesse ) : {
		complet : fn || !fn && easing ||
			isFunction( vitesse ) && vitesse,
		durée : vitesse,
		assouplissement : fn && assouplissement || assouplissement && !isFunction( assouplissement ) && assouplissement
	};

	// Accéder à l'état final si les effets sont désactivés
	si ( jQuery.fx.off ) {
		opt.duration = 0;

	} autre {
		si ( typeof opt.duration !== "nombre" ) ​​{
			si ( opt.duration dans jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} autre {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normaliser opt.queue - true/undefined/null -> "fx"
	si ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Mise en file d'attente
	opt.ancien = opt.complet;

	opt.complete = fonction() {
		si ( isFunction( opt.old ) ) {
			opt.old.call( ceci );
		}

		si ( opt.queue ) {
			jQuery.dequeue( ceci, opt.queue );
		}
	};

	retour opt;
};

jQuery.fn.extend( {
	fadeTo : fonction( vitesse, à, assouplissement, rappel ) {

		// Afficher tous les éléments cachés après avoir défini l'opacité sur 0
		renvoie this.filter( isHiddenWithinTree ).css( "opacité", 0 ).show()

			// Animer à la valeur spécifiée
			.end().animate( { opacité : à }, vitesse, assouplissement, rappel );
	},
	animer : fonction( prop, vitesse, assouplissement, rappel ) {
		var vide = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( vitesse, accélération, rappel ),
			doAnimation = fonction() {

				// Opérez sur une copie de prop afin que l'assouplissement par propriété ne soit pas perdu
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Animations vides ou résolutions de fin immédiates
				si ( vide || dataPriv.get( ceci, "finir" ) ) {
					anim.stop( vrai );
				}
			};

		doAnimation.finish = doAnimation;

		retourner vide || optall.queue === false ?
			ceci.chacun( doAnimation ) :
			cette.file( optall.queue, doAnimation );
	},
	arrêt : fonction( type, clearQueue, gotoEnd ) {
		var stopQueue = fonction( hooks ) {
			var stop = crochets.stop;
			supprimer hooks.stop;
			arrêter( aller à la fin );
		};

		si ( typeof type !== "chaîne" ) {
			gotoEnd = effacer la file d'attente;
			clearQueue = type;
			type = indéfini;
		}
		si ( effacer la file d'attente ) {
			cette.file( type || "fx", [] );
		}

		renvoie ceci.each( fonction() {
			var dequeue = vrai,
				index = type != null && type + "queueHooks",
				minuteries = jQuery.timers,
				données = dataPriv.get( ceci );

			si ( indice ) {
				si ( données[ index ] && données[ index ].stop ) {
					stopQueue( données[ index ] );
				}
			} autre {
				pour ( index dans les données ) {
					si ( données [ index ] && données [ index ].stop && rrun.test ( index ) ) {
						stopQueue( données[ index ] );
					}
				}
			}

			pour ( index = timers.length; index--; ) {
				si ( timers[ index ].elem === ceci &&
					( type == null || minuteries[ index ].queue === type ) ) {

					minuteries[ index ].anim.stop( gotoEnd );
					dequeue = faux;
					minuteries.splice( index, 1 );
				}
			}

			// Démarrer l'étape suivante dans la file d'attente si la dernière étape n'a pas été forcée.
			// Les temporisateurs appelleront actuellement leurs rappels complets, ce qui
			// sera retiré de la file d'attente mais seulement s'ils étaient gotoEnd.
			si ( dequeue || !gotoEnd ) {
				jQuery.dequeue( ceci, type );
			}
		} );
	},
	terminer : fonction( type ) {
		si ( type !== faux ) {
			type = type || "fx";
		}
		renvoie ceci.each( fonction() {
			indice var,
				données = dataPriv.get( ceci ),
				file d'attente = données[ type + "file d'attente" ],
				crochets = données[ type + "queueHooks" ],
				minuteries = jQuery.timers,
				longueur = file d'attente ? file d'attente.length : 0;

			// Activer l'indicateur de fin sur les données privées
			données.finish = vrai;

			// Vider d'abord la file d'attente
			jQuery.queue( ceci, type, [] );

			si ( crochets && crochets.stop ) {
				hooks.stop.call( ceci, vrai );
			}

			// Recherchez toutes les animations actives et terminez-les
			pour ( index = timers.length; index--; ) {
				si ( minuteurs [index].elem === ceci && minuteurs [index].queue === type ) {
					minuteries[ index ].anim.stop( true );
					minuteries.splice( index, 1 );
				}
			}

			// Recherchez toutes les animations dans l'ancienne file d'attente et terminez-les
			pour ( index = 0; index < longueur; index++ ) {
				si ( file d'attente [ index ] && file d'attente [ index ]. terminer ) {
					file d'attente[ index ].finish.call( ceci );
				}
			}

			// Désactiver l'indicateur de fin
			supprimer les données.finish;
		} );
	}
} );

jQuery.each( [ "basculer", "afficher", "masquer" ], function( _i, nom ) {
	var cssFn = jQuery.fn[ nom ];
	jQuery.fn[ nom ] = fonction( vitesse, assouplissement, rappel ) {
		vitesse de retour == null || typeof speed === "booléen" ?
			cssFn.apply( ceci, arguments ) :
			ceci.animate( genFx( nom, vrai ), vitesse, assouplissement, rappel );
	};
} );

// Générer des raccourcis pour des animations personnalisées
jQuery.chaque( {
	slideDown : genFx( "afficher" ),
	slideUp : genFx( "masquer" ),
	slideToggle : genFx( "bascule" ),
	fadeIn : { opacité : " afficher " },
	fadeOut : { opacité : "masquer" },
	fadeToggle : { opacité : « basculer » }
}, fonction( nom, accessoires ) {
	jQuery.fn[ nom ] = fonction( vitesse, assouplissement, rappel ) {
		renvoie ceci.animate( accessoires, vitesse, assouplissement, rappel );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = fonction() {
	minuterie var,
		je = 0,
		minuteries = jQuery.timers;

	fxNow = Date.maintenant();

	pour ( ; i < timers.length; i++ ) {
		minuterie = minuteries[ i ];

		// Exécutez le minuteur et retirez-le en toute sécurité une fois terminé (permettant le retrait externe)
		si ( !timer() && timers[ i ] === timer ) {
			minuteries.splice( i--, 1 );
		}
	}

	si ( !minuteries.longueur ) {
		jQuery.fx.stop();
	}
	fxNow = indéfini;
};

jQuery.fx.timer = fonction( minuteur ) {
	jQuery.timers.push( minuteur );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = fonction() {
	si ( en cours ) {
		retour;
	}

	en cours = vrai;
	calendrier();
};

jQuery.fx.stop = fonction() {
	en cours = null;
};

jQuery.fx.speeds = {
	lent : 600,
	rapide : 200,

	// Vitesse par défaut
	_par défaut : 400
};


// Basé sur le plugin de Clint Helfers, avec permission.
jQuery.fn.delay = fonction( heure, type ) {
	heure = jQuery.fx ? jQuery.fx.speeds[ heure ] || heure : heure;
	type = type || "fx";

	renvoie ceci.queue( type, fonction( suivant, hooks ) {
		var timeout = window.setTimeout( suivant, heure );
		crochets.stop = fonction() {
			window.clearTimeout( délai d'attente );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );